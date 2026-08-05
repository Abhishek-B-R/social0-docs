import type { ReactNode } from "react";

const styles: Record<string, string> = {
  GET: "border-emerald-600/30 bg-emerald-600/10 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-400",
  POST: "border-blue-600/30 bg-blue-600/10 text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/15 dark:text-blue-400",
  PUT: "border-violet-600/30 bg-violet-600/10 text-violet-700 dark:border-violet-500/40 dark:bg-violet-500/15 dark:text-violet-400",
  PATCH: "border-amber-600/30 bg-amber-600/10 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/15 dark:text-amber-400",
  DELETE: "border-rose-600/30 bg-rose-600/10 text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/15 dark:text-rose-400",
  DEL: "border-rose-600/30 bg-rose-600/10 text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/15 dark:text-rose-400",
};

const labels: Record<string, string> = {
  DELETE: "DEL",
};

export function MethodBadge({ method }: { method: string }): ReactNode {
  const key = method.toUpperCase();
  const label = labels[key] ?? key;
  const color =
    styles[key] ??
    "border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]";

  return (
    <span
      className={`inline-flex h-5 min-w-[2.25rem] shrink-0 items-center justify-center rounded border px-1 font-mono text-[10px] font-semibold leading-none ${color}`}
    >
      {label}
    </span>
  );
}
