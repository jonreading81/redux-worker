import { exposeStore } from "redux-in-worker";

import { configureStore } from "./configureStore";

exposeStore(configureStore());
