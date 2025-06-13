const users = [
    {id:1, name:"juan perez", email:"juan@perez.com"},
    {id:2, name:"Maria lopez", email:"marialopez@gmail.com"},
];

export async  function GET(request, {params}){
// obtener un usuario con ID X
const {id}= await params


 const ResponseAPI = {
        msg: `usuario obtenido: ${id}`,
        data: {},
        status: "ok"
}
const user =  users.find( user=> user.id === Number(id))
if(!user){
    ResponseAPI.msg="usuario encontrado",
    ResponseAPI.status="error";
    return new Response(JSON.stringify(ResponseAPI), {STATUS:404})
    
}
ResponseAPI.data = user;
return new Response(JSON.stringify(ResponseAPI), {STATUS:200})
}

export async  function POST(){
    // Editar un usuario CON ID X
}


// ej: DELTE ==> http://localhost:300/api/usuarios/25
export  async function DELETE(request, {params}){
    // eliminar un usuario CON ID X
    const{id}= await params 

    const ResponseAPI = {
        msg: `borrando usuaario ${id}`,
        data: null,
        status: "ok"
    }

    return new Response(JSON.stringify(ResponseAPI), {STATUS:200})

    // SI NO DEVUELVO NADA, SUELEN PONER UN 204 EN EL SISTEMA
    // return new Response(null, {status:204});
}