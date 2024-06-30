import './App.css';
import Nav from './components/Navbar/Nav';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./components/HomeData/Home"
import About from "./components/AboutData/About"
import Contact from "./components/ContactData/Contact"
import User from './components/Userdata/User';
function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element:<><Nav/> <Home/></>,
    },
    {
      path: "/about",
      element:<><Nav/> <About/></>,
    },
    {
      path: "/contact",
      element:<><Nav/> <Contact/></>,
    },
    {
      path: "/user/:username",
      element:<><Nav/> <User/></>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
