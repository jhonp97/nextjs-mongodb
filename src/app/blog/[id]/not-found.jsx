import Link from "next/link";

const NotFoundPage = () => {
    return (
        <>
           <h3 className="text-3xl">Blog no encontrado... 404</h3> 
            <Link href="/blog" className="text-blue-500 hover:underline">
                Volver al inicio
            </Link>
        </>
    );
}

export default NotFoundPage;