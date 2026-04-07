import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { authClient } from "@/lib/auth";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gender } from "@/lib/globals";

type TUpdateForm = {
  name: string;
  gender: string | null | undefined;
  dob: Date | null | undefined;
};

function UpdateProfile() {
  const { t } = useTranslation();

  const { data } = authClient.useSession();

  const { control, handleSubmit, formState, register } = useForm<TUpdateForm>({
    defaultValues: data?.user,
  });

  const onSubmit: SubmitHandler<TUpdateForm> = async (formData) => {
    console.info(formData);
    const { error } = await authClient.updateUser({ ...formData });

    if (error) {
      toast.error(error.message);
      return;
    }
  };

  console.info(formState.errors, formState.isDirty, "formState");

  return (
    <Dialog>
      <DialogTrigger
        render={(props) => (
          <Button variant={"secondary"} {...props}>
            {t("Edit")}
          </Button>
        )}
      >
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>{t("Edit Profile")}</DialogTitle>
          <DialogDescription>
            {t("Update your personal details")}
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">{t("Full Name")}</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John"
                  {...register("name")}
                />
              </Field>

              <Field orientation={"horizontal"}>
                <Field>
                  <FieldLabel htmlFor="gender">{t("Gender")}</FieldLabel>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        id="gender"
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={t("Select gender")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.values(Gender).map((g, idx) => (
                              <SelectItem
                                key={idx}
                                value={g}
                                className={"capitalize"}
                              >
                                {g}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="dob">{t("Date of Birth")}</FieldLabel>
                </Field>
              </Field>

              <Button
                type="submit"
                variant={"secondary"}
                disabled={formState.isSubmitting || !formState.isDirty}
              >
                {formState.isSubmitting && <Spinner />}
                {t("Update")}
              </Button>
            </FieldGroup>
          </form>
        </DialogPanel>
      </DialogPopup>
    </Dialog>
  );
}

export default UpdateProfile;
