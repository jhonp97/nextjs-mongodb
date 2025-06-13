"use server"

// traer todos los postS
export const getJsonUsuarios = async () => {

//    const res = await fetch("http://localhost:3001/api/v1/usuarios")
   const res = await fetch(`${process.env.NEXT_PUBLIC_API}/usuarios`)
   
    console.log("obteniendo usuarios")
    const data = await res.json()
    console.log("mis datos son", data)
    return data.data;
    

}
