import mongoose from 'mongoose'

const UsuarioSchema = new mongoose.Schema({
    //name: String,
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    edad: {
        type: Number,
        min: 0
    }
},{
    timestamps: true // Agregar automáticamente fechas de  createdAt y updatedAt
});
// Evitar re-compilar el modelo cuando estamos en desarrollo
const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);

export default Usuario;