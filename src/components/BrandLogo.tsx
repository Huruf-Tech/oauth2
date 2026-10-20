import HurufLogo from "@/assets/huruf-logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppBranding } from "@/hooks/useAppBranding";
import { cn, getInitials } from "@/lib/utils";

/** The tenant's logo, falling back to its initials and then the Huruf mark. */
export function BrandLogo({
  className,
  showName = false,
}: {
  className?: string;
  showName?: boolean;
}) {
  const { app, isLoading, appName } = useAppBranding();
  const src = app?.icon ?? app?.logo ?? (app ? undefined : HurufLogo);

  if (isLoading)
    return (
      <div className="flex items-center gap-2.5">
        <Skeleton className={cn("size-9 rounded-xl", className)} />
        {showName && <Skeleton className="h-4 w-24" />}
      </div>
    );

  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <Avatar
        className={cn(
          "size-9 rounded-xl bg-transparent ring-1 ring-foreground/8",
          className,
        )}
      >
        {src && <AvatarImage src={src} alt={appName} />}
        <AvatarFallback className="rounded-[inherit] bg-primary text-sm font-semibold text-primary-foreground">
          {getInitials(app?.name)}
        </AvatarFallback>
      </Avatar>
      {showName && (
        <span className="truncate text-[15px] font-semibold tracking-tight">
          {appName}
        </span>
      )}
    </div>
  );
}
