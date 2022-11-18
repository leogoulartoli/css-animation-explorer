import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { TransitionTiming } from "./components/TransitionTiming";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/transition-timing",
    element: <TransitionTiming/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
