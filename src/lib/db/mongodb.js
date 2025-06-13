import mongoose from 'mongoose'

const MONGO_DB_URI = process.env.MONGO_DB_URI;
// mongodb o mongodb+srv://

export const conectarDB = async () => {
    if(!MONGO_DB_URI) {
        throw new Error("Definir una variable MONGO_DB_URI en .env")
    }

    // Si ya estamos conectados, no reconectar
    if(mongoose.connection.readyState === 1){
        console.log("Ya conectado a Mongo Atlas");
        return;
    }

    try {
        await mongoose.connect(MONGO_DB_URI);
console.log("Conectado a Mongo DB Atlas");
        console.log("Base de datos actual: ", mongoose.connection.db.databaseName);

        // Preguntar que colleciones tengo disponibles
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Colecciones disponibles: ", collections.map(c => c.name));

    } catch (e) {
        console.error("Error al conectarse: ",e);
        throw e;
    }
}