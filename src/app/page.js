
import Contador from "@/components/Contador";
import Image from "next/image";
import styles from "@/app.module.css"
export default function Home() {

  // Home.jsx
  // estas dos en "use client" estarán vacias!
  const user = process.env.DB_USER; // devuelve vacio en client components
  const pass = process.env.DB_PASS; // devuelve vacio en client components

  const public_user = process.env.NEXT_PUBLIC_USER; // SE IMPRIME EN AMBOS COMPONENTES
  // importante para nuestro FRONT
  const BACKEND_API = process.env.NEXT_PUBLIC_API;
  return (
    <div className="items-center justify-center h-full flex flex-col">
      <p>
        <h3>accesibles por todos</h3>
        user:{user} <br/>
        pass: {pass} <br/>
        public User: {public_user} <br/>
        backend API: {BACKEND_API} <br/>
    </p>
      <Contador />
      <h1 className={styles.red}>Soy home</h1>

    </div>
  );
}
