// se esta renderizando en el servidor

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonPosts } from "@/server/posts";
import Link from "next/link";
import { crearPost } from "@/server/posts"; // Asegúrate de que esta función esté definida en tu servidor

const Blog = async () => {

    const posts = await getJsonPosts()



    return (
        <div className="items-center justify-center h-full flex flex-col p-2">
            <h1>Soy Blog</h1>
            {/* {JSON.stringify(posts)} */}
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-2">
                        <Card title={post.title}>{post.body}</Card>

                        <Link href={`./blog/${post.id}`}>
                            <Button size="sm">Ver mas...</Button>
                        </Link>
                    </li>
                ))}
            </ul>

            <h3>Crear post</h3>
            <form action={crearPost} className="max-w-[400px] mx-auto mt-24">
                <input type="text" name="title" placeholder="Titulo del post"
                className="border p-2 m-2 w-full rounded"
                />
                <textarea name="content" id="" placeholder="Contenido"
                className="border p-2 m-2 w-full rounded"></textarea>
                <Button type="submit">Crear Post</Button>

            </form>

        </div>
    );
}

export default Blog;