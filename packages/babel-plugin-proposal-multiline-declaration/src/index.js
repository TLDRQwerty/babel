import { declare } from "@babel/helper-plugin-utils";
import syntaxMultilineDeclaration from "@babel/plugin-syntax-mulitline-declaration";
import minimalVisitor from "./minimalVisitor";

const visitorsPerProposal = {
  minimal: minimalVisitor,
};

export default declare((api, options) => {
  api.assertVersion(7);

  return {
    name: "proposal-pipeline-operator",
    inherits: syntaxMultilineDeclaration,
    visitor: visitorsPerProposal[options.proposal],
  };
});
