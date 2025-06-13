"use server"

// traer todos los postS
export const getJsonPosts = async () =>{
    // podemos hacer paginacion usando: "? _limit=2 & _page=5"
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=5`)
    console.log("obrteniendo posts")
    console.log(res)
    return res.json()
}

// error al traer los postS
export const getJsonPostsConError = async () =>{
    const res = await fetch("https://jsonplaceEEERRORRRRRholder.typicode.com/posts")
    return res.json()
}

// traer UN POST ESPECIFICO
export const getJsonSinglePost = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}


export const crearPost = async (formData)=>{
    const title = formData.get("title");
    const content = formData.get("content")

    // guardar en la base de datos...
    // const newPost = await postMessage.create({
    //     ......
    // })
}

