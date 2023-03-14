import { composeHOCs } from "./composeHOCS";
import { withReactQuery } from "./withReactQuery";
import { withRouter } from "./withRouter";

export const withProviders = composeHOCs(withRouter, withReactQuery)