"use strict";
const visitorKeys = require("./visitor-keys");

const isObject = (object) =>
  object && typeof object === "object" && !Array.isArray(object);

function visitor(node) {
  return visitorKeys[node.type];
}

function traverse(ast, enter) {
  return traverseNode(ast);

  function traverseArray(nodes) {
    return nodes.map((node) => traverseNode(node));
  }

  function traverseNode(node) {
    if (Array.isArray(node)) {
      return traverseArray(node);
    }

    if (!isObject(node)) {
      return node;
    }

    let result = enter(node);
    if (typeof result === "undefined") {
      result = node;
    }

    if (result !== node) {
      return traverseNode(result);
    }

    const keys = visitor(node);
    if (!Array.isArray(keys)) {
      throw new Error(`No visitor keys given for ${node.type}.`);
    }

    for (const key of keys) {
      const child = node[key];
      const newChild = traverseNode(child);
      if (newChild === null) {
        delete node[key];
      } else if (newChild !== child) {
        node[key] = newChild;
      }
    }

    return node;
  }
}

module.exports = traverse;
