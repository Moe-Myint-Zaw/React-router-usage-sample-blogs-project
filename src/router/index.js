import {
    createBrowserRouter
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import BlogDetail from '../pages/BlogDetail.js';
import NotFound from '../pages/NotFound.js';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element:  <About/>
        },
        {
          path: "/blogs/:id",
          element: <BlogDetail/>
      },
      {
        path: "*",
        element: <NotFound/>
    }
      ]
    },
  ]);

export default router;