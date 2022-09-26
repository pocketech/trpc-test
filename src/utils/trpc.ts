import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

import type { AppRouter } from "../pages/api/trpc/[trpc]";

const getBaseUrl = () => {
  if (typeof window !== "undefined")
    // Browser should use relative path
    return "";

  if (process.env["VERCEL_URL"] !== undefined)
    // Reference for vercel.com
    return `https://${process.env["VERCEL_URL"]}`;

  if (
    process.env["RENDER_INTERNAL_HOSTNAME"] !== undefined &&
    process.env["PORT"] !== undefined
  )
    // Reference for render.com
    return `http://${process.env["RENDER_INTERNAL_HOSTNAME"]}:${process.env["PORT"]}`;

  // Assume localhost
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  return `http://localhost:${process.env["PORT"] ?? 3001}`;
};

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx: _ctx }) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       **/
      // QueryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: true,
});
// => { useQuery: ..., useMutation: ...}
