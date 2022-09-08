import { createWrapper } from "next-redux-wrapper";
import store, { AppStore } from "./index";

const wrapper = createWrapper<AppStore>(() => store);
export default wrapper;
