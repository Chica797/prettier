import { gfmFootnote } from "micromark-extension-gfm-footnote";
import { gfmFootnoteFromMarkdown } from "mdast-util-gfm-footnote";
import { gfmStrikethrough } from "micromark-extension-gfm-strikethrough";
import { gfmStrikethroughFromMarkdown } from "mdast-util-gfm-strikethrough";
import { gfmTable } from "micromark-extension-gfm-table";
import { gfmTableFromMarkdown } from "mdast-util-gfm-table";
import { gfmTaskListItem } from "micromark-extension-gfm-task-list-item";
import { gfmTaskListItemFromMarkdown } from "mdast-util-gfm-task-list-item";

import { markdownPlugin } from "./markdown-plugin.js";

// Similar to `remark-gfm` but excludes the autolink plugin because:
// - we just re-emit the link text as-is without performing real formatting on
//   it, so it’s fine to just treat it as text
// - In some cases, the autolink plugin will remove position information:
//   https://github.com/remarkjs/remark-gfm/issues/16
/** @type {import('unified').Plugin<[]>} */
export default function gfm() {
  this.use(markdownPlugin(gfmFootnote(), gfmFootnoteFromMarkdown()));
  this.use(markdownPlugin(gfmStrikethrough(), gfmStrikethroughFromMarkdown));
  this.use(markdownPlugin(gfmTable, gfmTableFromMarkdown));
  this.use(markdownPlugin(gfmTaskListItem, gfmTaskListItemFromMarkdown));
}
