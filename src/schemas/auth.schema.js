import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Usuario requerido',
    }),
    email: z.string({
        required_error: 'email es requerido',
    }).email({message: 'email es invalido'}),
    password: z.string({
        required_error: 'contraseña es requerida',
    }).min(6, {
        message: 'Contraseña debe ser de mas de 6 caracteres',
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "email es requerido"
    }).email({
        message: "email invalido",
    }),
    password: z.string({
        required_error: "contraseña es requerida"
    }).min(6, {
        message: "contraseña debe tener minimo 6 digitos"
    }),
});