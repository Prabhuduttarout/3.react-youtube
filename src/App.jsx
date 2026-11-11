import { useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        index: true,
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
    ]
  }
])

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
