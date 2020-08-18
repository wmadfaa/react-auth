import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "../src/index.scss"

library.add(fab, fas, far);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

