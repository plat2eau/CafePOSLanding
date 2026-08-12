"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export function DemoClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickable = target.closest("[data-analytics-event]");
      if (!(clickable instanceof HTMLElement)) return;

      track(clickable.dataset.analyticsEvent || "cta_click", {
        label: clickable.dataset.analyticsLabel || clickable.textContent || "",
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
