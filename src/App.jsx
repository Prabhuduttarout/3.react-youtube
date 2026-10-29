import { useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col gap-3 relative pt-12 px-1">
          <Header />
          <Body />
        </div>
      </Provider>
    </>
  );
}

export default App;
