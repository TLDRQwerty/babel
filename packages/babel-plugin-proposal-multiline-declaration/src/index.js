import { declare } from "@babel/helper-plugin-utils";
import syntaxMultilineDeclaration from "@babel/plugin-syntax-multiline-declaration";
export default declare(api => {
  api.assertVersion(7);

  return {
    name: "proposal-multiline-declaration",
    inherits: syntaxMultilineDeclaration,
    visitor: {},
  };
});
