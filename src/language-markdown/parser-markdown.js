import remarkParse from "remark-parse";
import unified from "unified";
import remarkMath from "remark-math";
import parseFrontMatter from "../utils/front-matter/parse.js";
import { hasPragma } from "./pragma.js";
import { locStart, locEnd } from "./loc.js";
import gfm from "./unified-plugins/gfm.js";
import liquid from "./unified-plugins/liquid-for-micromark.js";
import wikiLink from "./unified-plugins/wiki-link-for-micromark.js";

/**
 * based on [MDAST](https://github.com/syntax-tree/mdast) with following modifications:
 *
 * 1. restore unescaped character (Text)
 * 2. merge continuous Texts
 * 3. replace whitespaces in InlineCode#value with one whitespace
 *    reference: http://spec.commonmark.org/0.25/#example-605
 * 4. split Text into Sentence
 *
 * interface Word { value: string }
 * interface Whitespace { value: string }
 * interface Sentence { children: Array<Word | Whitespace> }
 * interface InlineCode { children: Array<Sentence> }
 */
function createParse() {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(gfm)
    .use(liquid)
    .use(wikiLink);

  return async (text) => {
    const { frontMatter, content } = parseFrontMatter(text);
    if (frontMatter) {
      const ast = await processor.run(processor.parse(content));
      ast.children.unshift(frontMatter);
      return ast;
    }

    return processor.run(processor.parse(text));
  };
}

const parser = {
  astFormat: "mdast",
  hasPragma,
  locStart,
  locEnd,
  parse: createParse(),
};

const markdown = {
  parsers: {
    remark: parser,
    markdown: parser,
  },
};

export default markdown;
