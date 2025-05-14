// This TypeScript declaration file provides type definitions for importing Markdown files.
// It supports various modes such as HTML, TOC (Table of Contents), and React components.

declare module "*.md" {
  // Attributes extracted from the Markdown frontmatter.
  // "unknown" would be more detailed depending on how you structure your frontmatter.
  const attributes: Record<string, unknown>;

  // Table of Contents generated when "Mode.TOC" is requested.
  const toc: { level: string; content: string }[];

  // HTML content generated when "Mode.HTML" is requested.
  const html: string;

  // Raw Markdown content when "Mode.RAW" is requested.
  const raw: string;

  // React component generated when "Mode.React" is requested.
  import React from "react";
  const ReactComponent: React.VFC;

  // Vue component options generated when "Mode.Vue" is requested.
  import { ComponentOptions, Component } from "vue";
  const VueComponent: ComponentOptions;
  const VueComponentWith: (
    components: Record<string, Component>,
  ) => ComponentOptions;

  // Export all types for usage in the project.
  export {
    attributes,
    toc,
    html,
    ReactComponent,
    VueComponent,
    VueComponentWith,
  };
}
