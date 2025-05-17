import {rootReducer} from 'redux'
import { messageReducer } from './message/Message.reducer';
let rootReducer = rootReducer({message:messageReducer});
export {rootReducer}