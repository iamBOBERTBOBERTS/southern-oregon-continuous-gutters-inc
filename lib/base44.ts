import { createClient } from "@base44/sdk";

const base44AppId = process.env.BASE44_APP_ID;

export const isBase44Configured = Boolean(base44AppId);

export function getBase44Client() {
  if (!base44AppId) {
    return null;
  }

  return createClient({
    appId: base44AppId,
    options: {
      onError: (error: unknown) => {
        console.error("Base44 request failed", {
          errorType: error instanceof Error ? error.name : "UnknownError"
        });
      }
    }
  });
}
