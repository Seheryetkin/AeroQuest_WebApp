import * as React from "react";
import * as ReactDOM from "react-dom";
import App from '../App'
import Dashboard from '../Panel/Dashboard'
import Question from '../Panel/Question'
import UserLists from '../Panel/UserLists'
import Profile from   '../Panel/Profile'
import ScoreLists from '../Panel/ScoreLists'
import Testtt from '../Panel/QuestionList'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path:'/',
    element:<Question/>
  },
  {
    path:'Soruekle',
    element:<Dashboard/>
  },
  {
    path:'Uyeler',
    element:<UserLists/>
  },
  {
    path:'Profile',
    element:<Profile/>
  },
  {
    path:'Score',
    element:<ScoreLists/>
  },
  {
    path: 'QuestionList/:params',
    element: <Testtt />
  }
])

export default router;
