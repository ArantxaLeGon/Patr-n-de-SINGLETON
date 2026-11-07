// 1. Importamos la herramienta Express que acabamos de instalar
const express = require('express');

// 2. Creamos nuestra aplicación (nuestro mesero)
const app = express();

// 3. Le decimos a la app que entienda los datos en formato JSON
app.use(express.json());

// ==============================================================
// Aquí irá la base de datos simulada y el patrón de diseño...
// ==============================================================


class BaseDeDatos {

  static instancia = null;

    constructor() {
    // 1. Verifica si YA EXISTE la instancia
        if (BaseDeDatos.instancia) {
        // 2. Si existe, la retorna de inmediato
        return BaseDeDatos.instancia;
        }

        // Si no existe, inicializamos el arreglo de personas
        this.personas = [];

        // Guarda 'this' para futuras consultas
        BaseDeDatos.instancia = this;
    }

    agregarPersona(persona) {
    this.personas.push(persona);
    }

    obtenerPersonas() {
    return this.personas;
    }
};

// Creamos la instancia
const bd = new BaseDeDatos();

// Ruta GET para ver las personas guardadas
app.get('/personas', (req, res) => {
    res.json(bd.obtenerPersonas());
});

// Ruta POST para guardar una nueva persona
app.post('/personas', (req, res) => {
    const {nombre, apellido, telefono}=  req.body;

    const nuevaPersona = {
    id: bd.obtenerPersonas().length + 1,
    nombre,
    apellido,
    telefono
  };

  bd.agregarPersona(nuevaPersona);
});

// 5. Encendemos el servidor en el puerto 3000
const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Servidor encendido. Entra a
    http://localhost:${PORT}/personas`);
});