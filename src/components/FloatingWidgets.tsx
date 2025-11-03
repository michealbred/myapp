"use client";

import { usePathname } from "next/navigation";
import FlashSaleWidget from "./FlashSaleWidget";
import HelpWidget from "./HelpWidget";
import WhatsAppChatButton from "./WhatsAppChatButton";

export default function FloatingWidgets() {
  const pathname = usePathname();
  const hiddenOn = ["/signup", "/login", "/profile", "/payment"];
  const shouldHide = hiddenOn.some((p) => pathname?.startsWith(p));
  if (shouldHide) return null;
  return (
    <>
      <FlashSaleWidget />
      <HelpWidget />
      <WhatsAppChatButton />
    </>
  );
}
