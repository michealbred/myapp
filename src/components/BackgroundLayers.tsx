"use client";

import { usePathname } from "next/navigation";

export default function BackgroundLayers() {
  const pathname = usePathname();
  // Hide site-wide interactive backgrounds on specific routes for a cleaner, professional look
  const hideOnRoutes = new Set<string>(["/warranty"]);
  if (hideOnRoutes.has(pathname)) return null;

  return (
    <>
      <div className="app-bg-motion" />
      <div className="app-bg-overlay" />
      <div className="app-bg-particles" />
    </>
  );
}
