import { createBrowserRouter } from "react-router-dom";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import NavComp from "../layout/NavComp";
import HomeComp from '../components/HomeComp';
import AboutComp from '../components/AboutComp';
import ProductsComp from '../components/ProductsComp';
import ContactComp from '../components/ContactComp';
import AddComp from "../components/AddComp";
import EditComp from "../components/EditComp";


const routing=createBrowserRouter([
    {path:'',element:<HomeComp/>},
    {path:'home',element:<HomeComp/>},
    {path:'about',element:<AboutComp/>},
    {path:'products',element:<ProductsComp/>},
    {path:'contact',element:<ContactComp/>},
    {path:'navcomp',element:<NavComp/>},
    {path:'maindashboard',element:<MainDashboardComp/>},
    {path:'pagenotfound', element:<PageNotFoundComp/>},
    {path:'addcomp', element:<AddComp/>},
    {path:'editcomp/:id', element:<EditComp/>}
])

export default routing;