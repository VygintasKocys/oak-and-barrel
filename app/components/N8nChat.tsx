"use client";

import { useEffect } from "react";

export function N8nChat() {
  useEffect(() => {
    // Dynamically load the n8n chat CSS to avoid Turbopack parse errors
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "http://localhost:5678/webhook/817e386f-fd65-40ce-af44-71aa8e560f28/chat",
        mode: "window",
        showWelcomeScreen: false,
        loadPreviousSession: true,
        initialMessages: [
          "Welcome to The Oak & Barrel! How can I help you today?",
        ],
        i18n: {
          en: {
            title: "The Oak & Barrel",
            subtitle: "Ask us about our menu, reservations, or anything else.",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Type your message...",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    });

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
