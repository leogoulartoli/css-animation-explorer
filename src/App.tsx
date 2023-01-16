import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ButtonEffects,
  CardEffects,
  ImageEffects,
  Keyframes,
  Transforms2D,
  Transforms3D,
} from "./components";
import { ExtraTransformEffects } from "./components/ExtraTransformEffects";
import { HeaderEffects } from "./components/HeaderEffects";
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
      {
        path: "/effects/tranforms-3D",
        element: <Transforms3D />,
      },
      {
        path: "/effects/button-effects",
        element: <ButtonEffects />,
      },
      {
        path: "/effects/image-effects",
        element: <ImageEffects />,
      },
      {
        path: "/effects/header-effects",
        element: <HeaderEffects />,
      },
      {
        path: "/effects/card-effects",
        element: <CardEffects />,
      },
      {
        path: "/effects/extra-transform-effects",
        element: <ExtraTransformEffects />,
      },
      {
        path: "/effects/keyframes",
        element: <Keyframes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
