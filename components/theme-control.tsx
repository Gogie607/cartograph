"use client";

import { useSyncExternalStore } from "react";

const storageKey = "cartograph-theme";

function getTheme() {
  return document.documentElement.dataset.theme ?? "system";
}

function subscribe(onChange: () => void) {
  function syncStorage(event: StorageEvent) {
    if (event.key !== storageKey && event.key !== null) return;
    const value = event.newValue;
    document.documentElement.dataset.theme =
      value === "light" || value === "dark" ? value : "system";
    onChange();
  }
  window.addEventListener("storage", syncStorage);
  window.addEventListener("cartograph-theme-change", onChange);
  return () => {
    window.removeEventListener("storage", syncStorage);
    window.removeEventListener("cartograph-theme-change", onChange);
  };
}

export function ThemeControl() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "system");

  return (
    <label className="theme-control">
      <span>Theme</span>
      <select
        aria-label="Theme"
        value={theme}
        onChange={(event) => {
          const value = event.target.value;
          document.documentElement.dataset.theme = value;
          try {
            localStorage.setItem(storageKey, value);
          } catch {
            // The current tab still respects the choice when storage is unavailable.
          }
          window.dispatchEvent(new Event("cartograph-theme-change"));
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
