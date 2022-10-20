const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inmueblesSchema = new Schema({
    idInmueble: {
        type: Number,
        required: true,
        index: {
            unique: true,
        }   
    },
    propietario: {
        type: String,
        required: true,
        index: true,
    },
        titulo: {
        type: String,
        required: true,
    },
    descripcion: String,

    especificaciones: {

        ciudad: {
            type: String,
            required: true,
        },

        direccion: {
            type: String,
            required: true,
        },

        tipoInmueble: {
            type: String,
            required: true,
        },

        valorArriendo: {
            type: Decimal128,
            required: true,
        },

        valorAdmin: Decimal128,

        tamaño: Number,
        estrato: Number,
        habitaciones: Number,
        baños: Number,
        parqueadero: Boolean,
    },
    estadoPublicacion: {
        type: String,
        required: true,
    },
    fechaPublicacion: {
        type: Date,
        required: true,
    },
    arrendatario: {
        type: String,
        index: true,
    },
    fotos: {
        0: Buffer,
        1: Buffer,
        2: Buffer,
        3: Buffer,
        4: Buffer,
        5: Buffer,
        6: Buffer,
        7: Buffer,
        8: Buffer,
        9: Buffer,
        10: Buffer,
        11: Buffer,
        12: Buffer,
        13: Buffer,
        14: Buffer,
        15: Buffer,
    }
});

module.exports = mongoose.model("Inmuebles", inmueblesSchema);
