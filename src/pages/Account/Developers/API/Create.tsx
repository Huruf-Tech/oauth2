import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ThunderSDK } from "thunder-sdk";
import React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxPopup,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  ComboboxInput,
} from "@/components/ui/combobox";
import useSWR from "swr";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDateForInput, getInitials } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SaveSecret } from "./SaveSecret";

type TForm = Parameters<typeof ThunderSDK.apiKeys.create>[number]["body"];

const DefaultForm: Omit<TForm, "resourceGrant"> & {
  resourceGrant: { tenantId: string; scopes: string[] }[];
} = {
  name: "",
  secret: "",
  resourceGrant: [],
  scopes: [],
};

function CreateAPIKey({
  data,
  render,
  onSuccess,
}: {
  data?: TForm & { _id: string };
  render?: React.ComponentProps<typeof DialogTrigger>["render"];
  onSuccess?: () => void;
}) {
  const { t } = useTranslation();
  const [secret, setSecret] = React.useState<string>();

  const { control, register, handleSubmit, formState, reset } = useForm<
    typeof DefaultForm
  >({
    defaultValues: DefaultForm,
    values: {
      ...DefaultForm,
      ...data,
      resourceGrant: Object.entries(data?.resourceGrant ?? {}).map(
        ([tenantId, scopes]) => ({ tenantId, scopes }),
      ),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "resourceGrant", // unique name for your Field Array
  });

  const { data: tenants, isLoading: loadingTenants } = useSWR(
    "tenants.get",
    async () =>
      fields.length > 0
        ? { results: [] }
        : await ThunderSDK.tenants.get({
            params: {},
            query: {},
          }),
  );

  const onSubmit = async (formData: typeof DefaultForm) => {
    try {
      const resourceGrant = Object.fromEntries(
        formData.resourceGrant.map((item) => [item.tenantId, item.scopes]),
      );

      if (data) {
        await ThunderSDK.apiKeys.update({
          body: { ...formData, resourceGrant },
          params: { id: data._id },
        });

        onSuccess?.();
        return;
      }

      const secret = `sk-${crypto.randomUUID()}`;

      await ThunderSDK.apiKeys.create({
        body: {
          ...formData,
          secret,
          resourceGrant,
        },
      });

      setSecret(secret);

      onSuccess?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          render ??
          ((props) => (
            <Button variant={"secondary"} {...props}>
              {t("Create key")}
            </Button>
          ))
        }
      ></DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>{t("API Key")}</DialogTitle>
          <DialogDescription>
            {t("Fill in the details for your API key.")}
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="fname">{t("Name")}</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("e.g My Application")}
                  {...register("name", {
                    required: t("Name is required!"),
                  })}
                />

                <FieldError>{formState.errors.name?.message}</FieldError>
              </Field>

              {!fields.length ? (
                <Field>
                  <FieldLabel htmlFor="scopes">{t("Scopes")}</FieldLabel>
                  <Controller
                    name="scopes"
                    control={control}
                    render={({ field }) => (
                      <ScopesInput
                        value={field.value ?? []}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <FieldError>{formState.errors.scopes?.message}</FieldError>
                </Field>
              ) : (
                <>
                  {fields.map((_field, index) => (
                    <React.Fragment key={_field.id}>
                      <Controller
                        name={`resourceGrant.${index}.tenantId`}
                        control={control}
                        render={({ field }) => (
                          <Field>
                            <FieldLabel htmlFor={`tenant-${index}`}>
                              {t("Tenant")}
                            </FieldLabel>

                            <Combobox
                              id={`tenant-${index}`}
                              items={tenants?.results ?? []}
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <ComboboxInput
                                placeholder="Select tenant..."
                                startAddon={loadingTenants && <Spinner />}
                                disabled={loadingTenants}
                              />
                              <ComboboxPopup>
                                <ComboboxEmpty>No results found.</ComboboxEmpty>
                                <ComboboxList>
                                  {(item) => (
                                    <ComboboxItem
                                      key={item._id}
                                      value={item._id}
                                    >
                                      <Avatar className="size-8 me-3">
                                        <AvatarImage src={item.logo} />
                                        <AvatarFallback>
                                          {getInitials(item.name)}
                                        </AvatarFallback>
                                      </Avatar>
                                      {item.name}
                                    </ComboboxItem>
                                  )}
                                </ComboboxList>
                              </ComboboxPopup>
                            </Combobox>
                          </Field>
                        )}
                      />

                      <Controller
                        name={`resourceGrant.${index}.scopes`}
                        control={control}
                        render={({ field }) => (
                          <Field>
                            <FieldLabel htmlFor={`scopes-${index}`}>
                              {t("Scopes")}
                            </FieldLabel>
                            <ScopesInput
                              value={field.value ?? []}
                              onChange={field.onChange}
                            />
                          </Field>
                        )}
                      />

                      <Button
                        type="button"
                        variant="destructive"
                        disabled={fields.length === 1}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </Button>

                      <Separator />
                    </React.Fragment>
                  ))}

                  <Button
                    type="button"
                    onClick={() => append({ tenantId: "", scopes: [] })}
                  >
                    Add
                  </Button>
                </>
              )}

              <Field>
                <FieldLabel htmlFor={"expiresAt"}>{t("Expires At")}</FieldLabel>
                <Controller
                  name="expiresAt"
                  control={control}
                  rules={{
                    validate: (value) => {
                      if (!value) return true;

                      const selectedDate = new Date(value);
                      selectedDate.setHours(0, 0, 0, 0);

                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      return (
                        selectedDate > today ||
                        t("Expiration date must be greater than current time!")
                      );
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      id={"expiresAt"}
                      type="date"
                      placeholder={t("Select expiration date")}
                      defaultValue={formatDateForInput(field.value)}
                      onChange={(e) => field.onChange(e.target.valueAsDate)}
                    />
                  )}
                />

                <FieldError>{formState.errors.expiresAt?.message}</FieldError>
              </Field>

              <Field>
                <div className="flex items-start gap-2">
                  <Checkbox
                    checked={fields.length > 0}
                    onCheckedChange={(checked) =>
                      checked ? append({ tenantId: "", scopes: [] }) : remove()
                    }
                    id={"advanced"}
                  />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor={"advanced"}>
                      Advanced (e.g. tenant-specific scopes)
                    </Label>
                    <p className="text-muted-foreground text-xs">
                      Enabling this will load additional scopes related to
                      tenants.
                    </p>
                  </div>
                </div>
              </Field>
            </FieldGroup>
          </form>
        </DialogPanel>
        <DialogFooter variant="bare">
          <Button
            variant={"secondary"}
            disabled={formState.isSubmitting || !formState.isDirty}
            onClick={handleSubmit(onSubmit)}
          >
            {formState.isSubmitting && <Spinner />}
            {t(data ? "Update" : "Submit")}
          </Button>

          {formState.isSubmitted && secret ? (
            <SaveSecret secret={secret} onDone={reset} />
          ) : null}
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

function ScopesInput({
  value,
  onChange,
}: {
  value: string[];
  onChange: (value: string[]) => void;
}) {
  const { data: policies, isLoading: loadingPolicies } = useSWR(
    "accessControlPolicies.get",
    async () =>
      await ThunderSDK.accessControlPolicies.get({
        params: {},
        query: {},
      }),
  );

  return (
    <Combobox
      items={[
        "full_access",
        ...(policies?.results ?? [])
          .filter((v) => v.name !== "root")
          .map((v) => v.name),
      ]}
      multiple
      value={value}
      onValueChange={onChange}
    >
      <ComboboxChips startAddon={loadingPolicies ? <Spinner /> : null}>
        <ComboboxValue>
          {(values: string[]) => (
            <>
              {values?.map((value) => (
                <ComboboxChip key={value} aria-label={value}>
                  {value}
                </ComboboxChip>
              ))}
              <ComboboxChipsInput
                placeholder={
                  values.length > 0 ? undefined : "Select an item..."
                }
                disabled={loadingPolicies}
                aria-label="Select an item"
              />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxPopup className="w-full">
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}

export default CreateAPIKey;
