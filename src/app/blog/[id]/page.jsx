// pagina de un post simple

import LikeButton from "@/components/LikeButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonSinglePost } from "@/server/posts";
import Link from "next/link";


// para disparar el notfound en caso de no encontrar un id
import { notFound } from "next/navigation";

const BlogSimple = async ({ params }) => {

  const { id } = await params;
  const post = await getJsonSinglePost(id);

  if (post.status === "error") {
    return notFound();
  }

  return (

    <>
      <div className="items-center justify-center h-full flex flex-col p-2">

        <Card title={`soy el post ${id}`}>

          <p>Este es un post simple y mi contenido es {post.body} </p>

          <Link href="/blog">
            <Button> Volver </Button>
          </Link>

          {/* ejemplo de componente de lado cliente */}
          {/* <Button onclick={()=>{alert("like")}}>Like!💖</Button> */}

          <LikeButton />
        </Card>


      </div>

    </>
  );
}

export default BlogSimple;