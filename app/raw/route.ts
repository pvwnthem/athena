import { getSnippet } from "@/services/snippet.service";

export async function GET(req: Request) {
  const routerQuery = new URL(req.url).searchParams;
  const id = routerQuery.get("id");
  const snippet = await getSnippet(id!);

  return new Response(snippet.content);
}