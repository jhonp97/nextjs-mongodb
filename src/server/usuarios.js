"use server"

// traer todos los postS

// export const getJsonUsuarios = async () => {
//   if (!process.env.NEXT_PUBLIC_API) return [];

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API}/usuarios`);
//     if (!res.ok) throw new Error('Respuesta no OK');
//     const data = await res.json();
//     return data.data;
//   } catch (error) {
//     console.error('Error al obtener usuarios:', error);
//     return [];
//   }
// };

// lib/usuarios.js
import clientPromise from "@/lib/db2";

export const getJsonUsuarios = async () => {
  const client = await clientPromise;
  const db = client.db(); // Usa el nombre que configuraste en DATABASE si es necesario
  const usuarios = await db.collection('usuarios').find().toArray();
  return usuarios;
};
