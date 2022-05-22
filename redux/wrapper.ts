import { createWrapper }   from 'next-redux-wrapper'
import store, { AppStore } from './store'

const wrapper = createWrapper<AppStore>(store);
export default wrapper;
