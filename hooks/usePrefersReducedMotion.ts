"use client";

import { useSyncExternalStore } from "react";

const MEDIA_QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onStoreChange: () => void): (() => void) => {
  const query = window.matchMedia(MEDIA_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
};

const getSnapshot = (): boolean => {
  return window.matchMedia(MEDIA_QUERY).matches;
};

const getServerSnapshot = (): boolean => {
  return false;
};

export const usePrefersReducedMotion = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};