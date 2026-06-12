import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Hidden";

export const Route = createLazyFileRoute("/hidden")({
  component: Page,
});
