"use server"

import { Card } from "@/components/ui/Card";
import { getJsonUsuarios2 } from "@/server/usuarios2";
import { crearUsuario } from "@/server/usuarios2";

const Usuarios = async () => {

    const usuarios = await getJsonUsuarios2();
    return (
        <div className="min-h-screen flex flex-col items-center justify-around bg-sky-100">

             <h1 className="text-6xl font-extrabold text-blue-600  text-center">Soy Usuarios -- NEXTJS</h1> 

            <h3>Formulario Crear Usuario</h3>
            <form action={crearUsuario}>
                <div>
                    <input type="text" name="name" placeholder="Ingrese un nombre" />
                </div>
                <div>
                    <input type="text" name="email" placeholder="Ingrese un email" />
                </div>
                <div>
                    <input type="text" name="edad" placeholder="Ingrese su edad" />
                </div>
                <button type="submit">Enviar</button>
            </form>

            <ul className=" flex flex-wrap gap-10 items-center justify-center p-5 ">
                {usuarios.map((usuario) => (
                    <li key={usuario._id} className="w-[300px] h-[100%]">
                        <Card title={usuario.name || usuario.nombre}>
                            <p><strong>{usuario.email}</strong></p>
                            <p><strong>{usuario.phone}</strong></p>
                            <p><strong>{usuario.edad} años</strong> </p>
                            <p><strong>{usuario.website}</strong></p>
                        </Card>
                    </li>

                ))}
            </ul>

          

        </div>
    );
}

export default Usuarios;