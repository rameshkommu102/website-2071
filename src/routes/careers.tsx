import { createFileRoute } from "@tanstack/react-router";

type CareersSearch = { jobtitle?: string; page?: number; apply?: boolean };

export const Route = createFileRoute("/careers")({
  validateSearch: (search: Record<string, unknown>): CareersSearch => ({
    jobtitle: typeof search.jobtitle === "string" ? search.jobtitle : undefined,
    page: typeof search.page === "number" ? search.page : Number(search.page) || undefined,
    apply: search.apply === true || search.apply === "true" ? true : undefined,
  }),
});
