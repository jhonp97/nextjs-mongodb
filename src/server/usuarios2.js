"use server"
import { conectarDB } from '@/lib/db/mongodb'
import Usuario from '../lib/db/models/usuario'


// revalidar ruta para actualizar la pagina que modifique
import { revalidatePath } from 'next/cache'


// traer todos los postS
export const getJsonUsuarios2 = async () => {

    //    const res = await fetch("http://localhost:3001/api/v1/usuarios")
    const res = await conectarDB()

    const usuarios = await Usuario.find({}).sort({ createdAt: -1 })

    return usuarios


}

export const crearUsuario = async (formData) => {
    try {
        await conectarDB()

        const datosUsuario = {
            name: formData.get("name"),
            email: formData.get("email"),
            edad: parseInt(formData.get("edad")) || undefined
        }

        // tamnbien asi se puede hacer
        // const name = formData.get("name");
        // const email = formData.get("email");
        // const edad = formData.get("edad");

        const newUsuario = new Usuario(datosUsuario)
        const usuarioGuardado = await newUsuario.save()

        revalidatePath("/")
        // revalidatePath("/usuarios2")
        // revalidatePath("/productos")


        return {
            msg: "usuario creado",
            data:JASON.parse(JSON.stringify(usuarioGuardado)),
            status: "ok"
        }

    } catch (e){
        console.log(e)
    }

}