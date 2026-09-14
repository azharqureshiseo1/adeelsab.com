import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { slugify } from "@/lib/utils";

function textOf(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}

// Required by @next/mdx in the App Router. h2/h3 get stable ids for the table of contents.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={slugify(textOf(children))}>{children}</h3>,
    a: ({ href = "", children }) =>
      href.startsWith("/") ? (
        <Link href={href}>{children}</Link>
      ) : /^(mailto:|tel:|#)/.test(href) ? (
        <a href={href}>{children}</a>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    table: ({ children }) => (
      <div className="overflow-x-auto">
        <table>{children}</table>
      </div>
    ),
    ...components,
  };
}
