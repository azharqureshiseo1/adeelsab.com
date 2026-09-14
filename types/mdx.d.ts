// Every MDX document in content/ exports a `metadata` object (its frontmatter).
declare module "*.mdx" {
  export const metadata: import("@/lib/content").DocMeta;
}
