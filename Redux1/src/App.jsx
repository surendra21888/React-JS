import Message from "./components/message/Message";
import {store} from './redux/Store'
import { Provider } from "react-redux";
let App = ()=>{

return <div>
           <Provider store={store}>
               <h1>App Componet</h1>
               <hr/>
               <Message/>
           </Provider>
       </div>

}
export default App;