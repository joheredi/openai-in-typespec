import "@typespec/http";
import "@typespec/openapi3";
import "@typespec/openapi";

import "./constants.tsp";
import "./models";
import "./operations.tsp";

@service({
  title: "OpenAI API",

  // todo: this is not yet supported.
  description: "APIs for sampling from the fine-tuning language models",

  version: "2.0.0",
})
namespace OpenAI;
