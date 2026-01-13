import { useCallback } from "react";

interface FetchOptions {
  url: string;
  method?: string;
  body?: any;
}

interface FetchResult {
  status: number;
}

interface LogEntry {
  url: string;
  method: string;
  body?: any;
  status: number;
  timestamp: number;
}

export function useFetch() {
  const fetchWithLog = useCallback(
    async ({
      url,
      method = "GET",
      body = null,
    }: FetchOptions): Promise<FetchResult> => {
      let status = 200;

      try {
        const response = await fetch(url, {
          method,
          body: body ? JSON.stringify(body) : null,
          headers: { "Content-Type": "application/json" },
        });
        status = response.status;
      } catch (e) {
        console.error("fetch error:", e);
        status = 500;
      }

      const logEntry = { url, method, body, status, timestamp: Date.now() };

      const prev = JSON.parse(
        localStorage.getItem("api-log") || "[]"
      ) as LogEntry[];
      const next = [...prev, logEntry];

      localStorage.setItem("api-log", JSON.stringify(next));

      return { status };
    },
    []
  );

  return fetchWithLog;
}
