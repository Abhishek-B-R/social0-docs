import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { MethodBadge } from "@/components/method-badge";

const methods = new Set(["GET", "POST", "PUT", "PATCH", "DELETE", "DEL"]);

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    if (methods.has(icon.toUpperCase())) {
      return createElement(MethodBadge, { method: icon });
    }
  },
});
