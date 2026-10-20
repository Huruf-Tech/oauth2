import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { ThunderSDK } from "thunder-sdk";
import Item from "@/components/Item";
import {
  ArrowLeft,
  InfinityIcon,
  SquarePenIcon,
  Trash2Icon,
} from "lucide-react";
import { Group, GroupSeparator } from "@/components/ui/group";
import { Button } from "@/components/ui/button";
import CopyToClipboard from "@/components/CopyToClipboard";
import { SkeletonRepeater } from "@/components/SkeletonRepeater";
import { Skeleton } from "@/components/ui/skeleton";
import VirtualList from "@/components/VirutalList";
import { useLoading } from "@/contexts/Loading";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { EmptyList } from "@/components/EmptyList";
import CreateAPIKey from "./Create";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function APIKeys({ onBack }: { onBack?: () => void }) {
  const { t } = useTranslation();
  const { setLoading } = useLoading();

  const {
    data,
    isLoading: loadingClients,
    isValidating,
    mutate,
  } = useSWR(
    "apiKeys.get",
    async () =>
      await ThunderSDK.apiKeys.get({
        params: {},
        query: {},
      }),
  );

  const authClients = data?.results ?? [];

  return (
    <div className="flex flex-col gap-5 items-start w-full h-full">
      <div className="flex items-center justify-between gap-3 w-full sticky top-0 z-10 max-w-lg mx-auto px-3">
        <div className="flex items-center gap-5 w-full">
          <Button size="icon-sm" variant="outline" onClick={onBack}>
            <ArrowLeft />
          </Button>

          <div className="flex flex-col">
            <h3 className="text-xl font-medium">{t("API Keys")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("Manage your API keys")}
            </p>
          </div>
        </div>

        <CreateAPIKey onSuccess={mutate} />
      </div>

      {loadingClients || isValidating ? (
        <SkeletonRepeater count={3} className="max-w-lg mx-auto px-3">
          <APIKeyCardSkeleton />
        </SkeletonRepeater>
      ) : authClients.length === 0 ? (
        <Empty className="justify-start mt-10">
          <EmptyHeader>
            <EmptyMedia className="w-full">
              <EmptyList />
            </EmptyMedia>
            <EmptyTitle>No API Keys!</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any API key yet. Get started by creating
              your first API key.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <VirtualList
          config={{
            count: authClients.length,
            paddingEnd: 100,
            estimateSize: () => 72,
          }}
        >
          {(virtualizer, items) =>
            items.map((virtualRow) => {
              const item = authClients[virtualRow.index];
              if (!item) return;

              return (
                <Item
                  key={item._id}
                  ref={virtualizer.measureElement}
                  data-index={item._id}
                  className={"item-start transition-all ease-in-out"}
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between w-full">
                      <CopyToClipboard
                        label="Publishable Key"
                        text={item._id}
                      />

                      <Badge variant="error" className="max-w-fit px-2">
                        {item.expiresAt ? (
                          `Expire ${formatDate(item.expiresAt, "MMM dd, yyyy")}`
                        ) : (
                          <InfinityIcon />
                        )}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <p className="capitalize line-clamp-1 text-sm">
                        {item.name}
                      </p>

                      <Group aria-label="Client actions">
                        <CreateAPIKey
                          data={item}
                          render={
                            <Button variant="outline" size="icon-sm">
                              <SquarePenIcon />
                            </Button>
                          }
                          onSuccess={mutate}
                        />
                        <GroupSeparator />
                        <Button
                          variant="destructive-outline"
                          size="icon-sm"
                          onClick={async () => {
                            const el = document.querySelector(
                              `[data-index="${item._id}"]`,
                            );

                            try {
                              setLoading(true);
                              el?.classList.add("opacity-30");

                              await ThunderSDK.apiKeys.del({
                                params: { id: item._id },
                              });

                              el?.classList.add(
                                "animate-out",
                                "fade-out",
                                "slide-out-to-right-70",
                                "duration-500",
                              );

                              authClients.filter((v) => v._id !== item._id);

                              setTimeout(() => mutate(), 400);
                            } catch (error) {
                              console.error("error", error);
                            } finally {
                              setLoading(false);
                            }
                          }}
                        >
                          <Trash2Icon />
                        </Button>
                      </Group>
                    </div>
                  </div>
                </Item>
              );
            })
          }
        </VirtualList>
      )}
    </div>
  );
}

function APIKeyCardSkeleton() {
  return (
    <Item>
      <Skeleton className="size-10 min-w-10 rounded-full" />
      <div className="flex flex-1 flex-col">
        <Skeleton className="my-0.5 h-4 max-w-30" />
        <Skeleton className="h-4 max-w-20" />
      </div>
      <Skeleton className="h-7 w-14" />
    </Item>
  );
}
