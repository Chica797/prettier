export const DOC_TYPE_STRING = "string";
export const DOC_TYPE_ARRAY = "array";
export const DOC_TYPE_CURSOR = "cursor";
export const DOC_TYPE_INDENT = "indent";
export const DOC_TYPE_ALIGN = "align";
export const DOC_TYPE_TRIM = "trim";
export const DOC_TYPE_GROUP = "group";
export const DOC_TYPE_FILL = "fill";
export const DOC_TYPE_IF_BREAK = "if-break";
export const DOC_TYPE_INDENT_IF_BREAK = "indent-if-break";
export const DOC_TYPE_LINE_SUFFIX = "line-suffix";
export const DOC_TYPE_LINE_SUFFIX_BOUNDARY = "line-suffix-boundary";
export const DOC_TYPE_LINE = "line";
export const DOC_TYPE_LABEL = "label";
export const DOC_TYPE_BREAK_PARENT = "break-parent";

/**
 * @typedef {(
 *  | typeof DOC_TYPE_CURSOR
 *  | typeof DOC_TYPE_INDENT
 *  | typeof DOC_TYPE_ALIGN
 *  | typeof DOC_TYPE_TRIM
 *  | typeof DOC_TYPE_GROUP
 *  | typeof DOC_TYPE_FILL
 *  | typeof DOC_TYPE_IF_BREAK
 *  | typeof DOC_TYPE_INDENT_IF_BREAK
 *  | typeof DOC_TYPE_LINE_SUFFIX
 *  | typeof DOC_TYPE_LINE_SUFFIX_BOUNDARY
 *  | typeof DOC_TYPE_LINE
 *  | typeof DOC_TYPE_LABEL
 *  | typeof DOC_TYPE_BREAK_PARENT
 * )} ObjectDocTypes
 */

/**
 * @typedef {(
 *  | typeof DOC_TYPE_STRING
 *  | typeof DOC_TYPE_ARRAY
 *  | ObjectDocTypes
 * )} DocTypes
 */

/** @type Set<ObjectDocTypes> */
export const VALID_OBJECT_DOC_TYPES = new Set([
  DOC_TYPE_CURSOR,
  DOC_TYPE_INDENT,
  DOC_TYPE_ALIGN,
  DOC_TYPE_TRIM,
  DOC_TYPE_GROUP,
  DOC_TYPE_FILL,
  DOC_TYPE_IF_BREAK,
  DOC_TYPE_INDENT_IF_BREAK,
  DOC_TYPE_LINE_SUFFIX,
  DOC_TYPE_LINE_SUFFIX_BOUNDARY,
  DOC_TYPE_LINE,
  DOC_TYPE_LABEL,
  DOC_TYPE_BREAK_PARENT,
]);
