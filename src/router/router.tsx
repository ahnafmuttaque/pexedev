import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import KnowUs from "../pages/know-us/KnowUs";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      {
        path: "know-us",
        Component: KnowUs,
      },
    ],
  },
]);

export default router;
