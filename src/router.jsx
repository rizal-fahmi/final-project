import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import Navbar from "./components/header/Navbar.jsx";
import InputCompare from "./components/content/InputCompare.jsx";
import Compare from "./pages/Compare.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/compare',
        element: <InputCompare />,
      },
      {
        path: '/compare/:codeParams1/:codeParams2',
        element: <Compare />,
      },
      {
        path: '/news',
        element: <News />,
      },
    ],
  },
]);

export default router;