// NO podemos tener multiples funciones o rutas con el mismo metodo

export async  function  GET(request){

    const ResponseAPI={
        msg: "usuarios devueltos",
        data:[],
        status: "ok"
    }
// obtener todos los usuarios de la base de datos
const users = [
    {id:1, name:"juan perez", email:"juan@perez.com"},
    {id:2, name:"Maria lopez", email:"marialopez@gmail.com"},
];

ResponseAPI.data =users ;
    return new Response(JSON.stringify(ResponseAPI), {
        status:200,
        headers: {'content-Type': 'application/json'}
    }

    )
}

// ej: POST=> http://localhost:3000/api/usuarios
// body: {"name": "cecilia", "email":"ceci@gmail.com"}
export async function POST(request){
    // crear un usuario
    // parsear el body
    const body =await request.json()
    const { name, email}= body

    // insertariamos los datos en la base datos
    const newUser = {
        id: Date.now(),
        name,
        email
    }

     const ResponseAPI={
        msg: "usuario creado con exito",
        data:[newUser],
        status: "ok"
    }
    return new Response(JSON.stringify(ResponseAPI),{
        status:201,
        headers: {'content-Type': 'application/json'}
    })
}

