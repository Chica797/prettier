import { fill, join, line } from "../../src/document/builders.js";
import { printDocToString } from "../../src/document/printer.js";

test("`printDocToString` should not manipulate docs", () => {
  const printOptions = { printWidth: 40, tabWidth: 2 };
  const doc = fill(
    join(
      line,
      Array.from({ length: 255 }, (_, index) => String(index + 1))
    )
  );

  expect(doc.parts.length).toBe(255 + 254);

  const { formatted: firstPrint } = printDocToString(doc, printOptions);

  expect(doc.parts.length).toBe(255 + 254);

  const { formatted: seconPrint } = printDocToString(doc, printOptions);

  expect(firstPrint).toBe(seconPrint);
});
