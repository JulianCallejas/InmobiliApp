const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usuariosSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        } 

    },
    contrasena: {
        type: String,
        required: true,
    },
    nombre: String,
    
    identificacion: String,
        
    telefono: String,
        
});

    module.exports = mongoose.model("Usuarios", usuariosSchema);
