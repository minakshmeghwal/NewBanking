import logo from './logo.svg';
import './App.css';
import AccountCreate from './Screens/AccountCreate';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Root from './Screens/Root';


const router = createBrowserRouter([
    {
    path: "/",
    element: <Root />
    },
    {
      path: "/CreateAccount",
      element: <AccountCreate/>
    }



]);

export default function App() {

  return <RouterProvider router={router} />;
}
