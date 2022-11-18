import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Transforms2D } from "./components";
import { Home } from "./components/Home";
import { Template } from "./components/Template";
import { TransitionTiming } from "./components/TransitionTiming";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Template />,
    path: "/effects",
    children: [
      {
        path: "/effects/transition-timing",
        element: <TransitionTiming />,
      },
      {
        path: "/effects/tranforms-2D",
        element: <Transforms2D />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
