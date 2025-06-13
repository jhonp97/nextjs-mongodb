const users = [
    { id: 1, name: "moto kawasaky ninja 250", price: 23000 },
    { id: 2, name: "audi TT", price: 1500 },
];

// traer productos con search params (buscar por nombre)
// http://localhost:300/api/productos?nombre=Moto&price=300
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams; // ?nombre=Moto
    const name = searchParams.get("nombre")
    const price = searchParams.get("price")

    const productosEncontrados = productos.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))

    const ResponseAPI = {
        msg: "productos  devueltos",
        data: productosEncontrados,
        status: "ok"
    }

    // buscar en la base de datos un producto con el nombre pedido

    return new Response(JSON.stringify(ResponseAPI), {
        status: 200
    }

    )
}
