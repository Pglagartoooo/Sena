import { BrowserRouter, Routes, Route } from "react-router-dom"
import {AuthProvider} from './context/AuthContext.jsx'
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Header } from "./pages/Header.tsx"
import { MainArticle } from "./pages/Inicio.tsx"
import ProtectedRouted from "./pages/ProtectedRouted.tsx"
import TaskFormPage from "./pages/TaskFormPage.tsx"
import Tasks from "./pages/tasks.tsx"
import NavBar from "./components/NavBar.tsx"
import Footer from "./pages/Footer.tsx"


function App() { 
    return(
      <AuthProvider>
       <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path='/' element={<MainArticle />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />

        <Route element={<ProtectedRouted/>}>
        <Route path='/tasks' element={<Tasks/>} />
        <Route path='/add-task' element={<TaskFormPage/>} />
        <Route path='/tasks/:id' element={<h1>update task</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />  
        </Route> 
        
        </Routes>
      <footer>
        <Footer/>
      </footer>
      </BrowserRouter>

      </AuthProvider>
      
    )
  
}

export default App