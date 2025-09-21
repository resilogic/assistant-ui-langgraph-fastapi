import { Thread } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import {
  useAssistantInstructions,
  useAssistantTool,
} from "@assistant-ui/react";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  // this is a frontend system prompt that will be made available to the langgraph agent
  useAssistantInstructions("Your name is assistant-ui.");

  // this is an frontend function that will be made available to the langgraph agent
  useAssistantTool({
    toolName: "refresh_page",
    description: "Refresh the page",
    parameters: {},
    execute: async () => {
      window.location.reload();
    },
  });

  return <Thread assistantMessage={{ components: { Text: MarkdownText } }} />;
}