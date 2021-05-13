"use strict";
const babel = require("./babel");
const typescript = require("./typescript");
const extra = {
  TSJSDocAllType: [],
  TSJSDocUnknownType: [],
  TSPrivateIdentifier: [],
  TSJSDocNullableType: [],
  TSJSDocNonNullableType: [],
  TSParenthesizedType: [],
  SpreadProperty: [],
  BigIntLiteralTypeAnnotation: [],
};

const visitorKeys = Object.create(null);
for (const parserVisitorKeys of [babel, typescript, extra]) {
  for (const [type, keys] of Object.entries(parserVisitorKeys)) {
    visitorKeys[type] = [...(visitorKeys[type] || []), ...keys];
  }
}

for (const [key, value] of Object.entries(visitorKeys)) {
  visitorKeys[key] = [...new Set([...value, "typeAnnotation"])];
}

module.exports = visitorKeys;
