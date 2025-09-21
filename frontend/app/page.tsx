"use client";

import { MyAssistant } from "@/components/MyAssistant";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useEdgeRuntime } from "@assistant-ui/react";

export default function Home() {
  const runtime = useEdgeRuntime({
    api: "http://localhost:8000/api/chat",
    unstable_AISDKInterop: true,
  });

  return (
    <main className="h-dvh">
      <AssistantRuntimeProvider runtime={runtime}>
        <MyAssistant />
      </AssistantRuntimeProvider>
    </main>
  );
}
