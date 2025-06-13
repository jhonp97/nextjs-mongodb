"use server"

// traer todos los postS

export const getJsonUsuarios = async () => {
  if (!process.env.NEXT_PUBLIC_API) return [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/usuarios`);
    if (!res.ok) throw new Error('Respuesta no OK');
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    return [];
  }
};

