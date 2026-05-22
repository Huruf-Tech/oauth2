import Item from "@/components/Item";
import { KeyRoundIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import OAuth2 from "@/components/custom-icons/oauth2";
import OAuth from "./Oauth";
import { APIKeys } from "./API";

export function Developers() {
  const { t } = useTranslation();
  const [page, setPage] = React.useState("1");

  const Developers = React.useMemo(
    () => [
      {
        icon: OAuth2,
        label: "OAuth",
        value: "oauth",
        orientation: "vertical",
        content: t("Manage your oauth clients"),
        onClick: () => setPage("2"),
      },
      {
        icon: KeyRoundIcon,
        label: "API Keys",
        value: "apiKeys",
        content: t("Manage your api keys"),
        onClick: () => setPage("3"),
      },
    ],
    [t],
  );

  return (
    <div
      className="w-full h-full px-3 max-w-lg mx-auto t-page-slide"
      data-page={page}
    >
      <style>{`
:root {
  --page-slide-dur: 200ms;
  --page-fade-dur: 200ms;
  --page-slide-distance: 8px;
  --page-blur: 3px;
  --page-stagger: 0ms;
  --page-exit-enabled: 1;
  --page-slide-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --page-fade-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.t-page-slide {
  position: relative;
}
.t-page-slide .t-page[data-page-id="1"] {
  --t-page-from-x: calc(var(--page-slide-distance) * -1);
}
.t-page-slide .t-page[data-page-id="2"] {
  --t-page-from-x: var(--page-slide-distance);
}
.t-page-slide .t-page[data-page-id="3"] {
  --t-page-from-x: var(--page-slide-distance);
}
.t-page-slide .t-page {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  transform: translateX(calc(var(--t-page-from-x, 0px) * var(--page-exit-enabled)));
  filter: blur(calc(var(--page-blur) * var(--page-exit-enabled)));
  transition:
    opacity   var(--page-fade-dur)  var(--page-fade-ease),
    transform var(--page-slide-dur) var(--page-slide-ease),
    filter    var(--page-slide-dur) var(--page-slide-ease);
  will-change: opacity, transform, filter;
}
.t-page-slide[data-page="1"] .t-page[data-page-id="1"],
.t-page-slide[data-page="2"] .t-page[data-page-id="2"],
.t-page-slide[data-page="3"] .t-page[data-page-id="3"] {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
  filter: blur(0);
  transition-delay: var(--page-stagger);
}

@media (prefers-reduced-motion: reduce) {
  .t-page-slide .t-page { transition: none !important; }
}
`}</style>
      <section className="flex flex-col gap-5 t-page" data-page-id="1">
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">{t("Developer & Tools")}</h3>
          <p className="text-sm text-muted-foreground">
            {t("Manage your developer tools")}
          </p>
        </div>
        {/* list */}
        <div className="flex flex-col gap-1 w-full">
          {Developers.map((item, index) => (
            <Item key={index} onClick={item.onClick} className="cursor-pointer">
              <div className="flex items-center gap-3">
                <item.icon />
                <div className="flex flex-col">
                  <h3 className="font-medium">{t(item.label)}</h3>
                  {typeof item.content === "string" ? (
                    <p className="text-sm text-muted-foreground">
                      {item.content}
                    </p>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </Item>
          ))}
        </div>
      </section>
      <section className="t-page w-full" data-page-id="2">
        {page === "2" && <OAuth onBack={() => setPage("1")} />}
      </section>
      <section className="t-page w-full" data-page-id="3">
        {page === "3" && <APIKeys onBack={() => setPage("1")} />}
      </section>
    </div>
  );
}
