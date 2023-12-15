import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
 
function NavBar(){

     const { isAuthenticated, logout } = useAuth();

    return (
    <nav className="h-10vh flex justify-between z-50 text-white lg-py-4 px-20 py-2 resize-y bg-slate-950 ">
         <div className="flex items-center flex-1 text-sky-300 ">
         <Link to="/">
         <h1 >SRF</h1>       
         </Link>
         </div>
         <ul className="flex gap-x-2">
         {isAuthenticated ? (
          <>
         
         </>
         ) : (
         <>
         <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
         
         
         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white">
         <Link to="#"> Sobre Nosotros </Link>
         </li>
         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white">
           <Link to="#"> Contactanos </Link>
         </li>
         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white">
          <Link to="/login">Ingreso</Link>
         </li>
         <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded text-white">
          <Link to="/register">Registrarse</Link>
         </li>
             </ul>
           </div>
         </div>
         </>
         )}
         </ul>
    </nav>
    )
}

export default NavBar;