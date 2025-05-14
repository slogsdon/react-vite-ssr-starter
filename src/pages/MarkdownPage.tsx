// This is the Markdown page component.
// It renders content from a Markdown file as a React component.

import { ReactComponent as MarkdownContent } from "../content/example.md";

export default function MarkdownPage() {
  return (
    <div className="markdown-body">
      <MarkdownContent />
    </div>
  );
}
