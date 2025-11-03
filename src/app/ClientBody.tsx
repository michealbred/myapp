"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ensure antialiasing without removing existing classes
  useEffect(() => {
    document.body.classList.add("antialiased");
  }, []);

  return <div className="antialiased">{children}</div>;
}
