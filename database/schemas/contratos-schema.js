const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contratosSchema = new Schema({
    idContrato: {
        type: Number,
        required: true,
        index: {
            unique: true,
        }
    },
    idInmueble: {
        type: Number,
        required: true,
        index: true,
    },
    fechaContrato: {
        type: Date,
        required: true,
    },
    fechaPublicacion: {
        type: Date,
        required: true,
    },
    propietario: {
        type: String,
        required: true,
        index: true,
    },
    arrendatario: {
        type: String,
        required: true,
        index: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    valorArriendo: {
        type: Decimal128,
        required: true,
    },
    valorAdmin: Decimal128,
    activo: Boolean,
    fechaTerminacion: Date,

});

module.exports = mongoose.model("Contratos", contratosSchema);
