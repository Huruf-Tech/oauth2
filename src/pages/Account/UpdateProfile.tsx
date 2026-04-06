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
import { FieldGroup } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { authClient } from "@/lib/auth";
import { toast } from "sonner";

type TUpdateForm = {
  name: string;
  gender: string | null | undefined;
  dob: Date | null | undefined;
};

function UpdateProfile() {
  const { t } = useTranslation();

  const { data } = authClient.useSession();

  const { handleSubmit, formState } = useForm<TUpdateForm>({
    defaultValues: data?.user,
  });

  const onSubmit: SubmitHandler<TUpdateForm> = async (formData) => {
    const { error } = await authClient.updateUser({ ...formData });

    if (error) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        render={(props) => (
          <Button variant={"secondary"} {...props}>
            {t("Edit")}
          </Button>
        )}
      ></DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>{t("Edit Profile")}</DialogTitle>
          <DialogDescription>
            {t("Update your personal details")}
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup></FieldGroup>
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
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

export default UpdateProfile;
