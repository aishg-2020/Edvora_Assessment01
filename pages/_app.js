import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../store";
const store = createStore(reducers);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
     
        <Component {...pageProps} />
     
    </Provider>
  );
}

export default MyApp;
