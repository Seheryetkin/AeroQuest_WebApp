import * as React from "react";
import * as ReactDOM from "react-dom";
import App from '../App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  }
])

export default router;
