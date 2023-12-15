import { useForm } from 'react-hook-form';
import {useAuth} from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom'
   
function RegisterPage() {
     const { register, handleSubmit, formState: {errors},
    } = useForm ();
     const { signup, isAuthenticated, errors: registerErrors } = useAuth();
     const navigate = useNavigate()

     useEffect (()=> {
     if (isAuthenticated) navigate('/tasks')
     }, [isAuthenticated])

     const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return(
        <div className='flex h-screen items-center justify-center text-center bg-zinc-800'>
        <div className='bg-neutral-500 max-w-md w-full p-10 rounded-md'>

        <h1 className='text-2xl font-bold justify-center text-center'> Registro </h1>
        {
            registerErrors.map((error, i) => (
                <div className='bg-red-500 p-2 text-white' key={i}>
                    {error}
                </div>
            ))
        }
        <form onSubmit={onSubmit}>
        <input type="text" {...register('username', {required: true})}
               className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3' 
               placeholder='Username'       
        />
        {
            errors.username && (
                <p className='text-red-500'>
                    usuario es requerido
                </p>
            )
        }
        <input type="email" {...register('email', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3'
                placeholder='Email'
        />
        {
            errors.email && (
                <p className='text-red-500'>
                    email es requerido
                </p>
            )
        }
        <input type="password" {...register('password', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3'
                placeholder='password'
        />
        {
            errors.password && (
                <p className='text-red-500'>
                    contraseña es requerido
                </p>
            )
        }
        <button className='items-center justify-center text-center bg-blue-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded' >
            Register
        </button>
        </form>
        <p className='flex gap-x-2 justify-between py-4'>
        <Link to="/login"> <h1>Ya tienes una cuenta?</h1></Link>
        </p>
         </div>
        </div>
    )
}

export default RegisterPage