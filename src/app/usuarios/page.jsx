"use server"

import { Card } from "@/components/ui/Card";
import { getJsonUsuarios } from "@/server/usuarios";

const Usuarios = async () => {

    const usuarios = await getJsonUsuarios();
    return (
        <div className="min-h-screen flex flex-col items-center justify-around bg-sky-100">

             <h1 className="text-6xl font-extrabold text-blue-600  text-center">Soy Usuarios NEXTJS</h1> 

            <ul className=" flex flex-wrap gap-10 items-center justify-center p-5 ">
                {usuarios.map((usuario) => (
                    <li key={usuario._id} className="w-[300px] h-[100%]">
                        <Card title={usuario.name || usuario.nombre}>
                            <p><strong>{usuario.email}</strong></p>
                            <p><strong>{usuario.phone}</strong></p>
                            <p><strong>{usuario.edad} </strong> </p>
                            <p><strong>{usuario.website}</strong></p>
                        </Card>
                    </li>

                ))}
            </ul>

          

        </div>
    );
}

export default Usuarios;