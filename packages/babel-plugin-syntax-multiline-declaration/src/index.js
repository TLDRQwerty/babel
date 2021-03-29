import { declare } from "@babel/helper-plugin-utils";

export const proposals = ["minimal"];

export default declare((api, { proposal }) => {
  api.assertVersion(7);

  if (typeof proposal !== "string" || !proposals.includes(proposal)) {
    throw new Error(
      "The mutliline declaration plugin requires a 'proposal' option." +
        "'proposal' must be one of: " +
        proposals.join(", ") +
        ". More details: https://babeljs.io/docs/en/next/babel-plugin-proposal-multiline-declaration",
    );
  }

  return {
    name: "syntax-multiline-declaration",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push(["multilineDelcaration", { proposal }]);
    },
  };
});
