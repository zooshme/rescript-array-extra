// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Core__Array from "@rescript/core/src/Core__Array.res.mjs";

function flatten(a) {
  return Core__Array.reduce(a, [], (function (acc, b) {
                return Belt_Array.concatMany([
                            acc,
                            b
                          ]);
              }));
}

export {
  flatten ,
}
/* No side effect */
