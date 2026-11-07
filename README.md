# API Patrones — Singleton

API sencilla hecha con **Node.js** y **Express** que guarda personas en una "base de datos" simulada (un arreglo en memoria). Sirve para mostrar el patrón de diseño **Singleton**.

## ¿Qué patrón usamos?

**Singleton**: garantiza que la clase `BaseDeDatos` tenga **una sola instancia** en toda la aplicación. Si ya existe, se reutiliza; si no, se crea. Así todos los datos viven en un único lugar y no se duplican ni se pierden.

## Análisis del patrón

| Criterio de análisis | Respuesta del equipo |
|---|---|
| **Nombre del patrón** | Singleton |
| **¿Qué resolvimos?** | Aseguramos que la base de datos tuviera una única instancia, evitando la duplicación o pérdida de datos con una validación de si existe la instancia o si se crea. |
| **Ventajas** | • Se previene que se creen instancias repetidamente.<br>• Se optimiza la memoria del servidor.<br>• Se asegura que el estado de los datos se mantenga actualizado en un solo punto para la aplicación. |
| **Desventajas** | • El código rompe la organización, mezclando reglas de negocio con mantener una sola instancia.<br>• La complejidad es alta para un sistema sencillo.<br>• La flexibilidad es baja, por lo cual si se modifica en diferentes puntos del programa se puede dificultar el rastreo de errores. |
| **Contraste de arquitecturas** | Si se realizara sin el patrón, se estructuraría mediante una sola clase, siendo de código limpio y de comportamiento estándar. Las instancias se harían aprovechando el comportamiento de los módulos de Node.js. |

## Estructura del proyecto

```
Trabajo patrones/
├── api-patrones/
│   ├── server.js        # Servidor, clase Singleton y rutas
│   └── package.json
└── tabla.docx           # Análisis del patrón hecho por el equipo
```

## Requisitos

- [Node.js](https://nodejs.org/) instalado

## Instalación y uso

1. Entra a la carpeta de la API:
   ```bash
   cd api-patrones
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   node server.js
   ```
4. El servidor queda activo en `http://localhost:3000`.

## Rutas disponibles

| Método | Ruta        | Descripción                  |
|--------|-------------|------------------------------|
| GET    | `/personas` | Muestra las personas guardadas |
| POST   | `/personas` | Guarda una nueva persona     |

### Ejemplo para guardar una persona

```bash
curl -X POST http://localhost:3000/personas \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Ana", "apellido": "Pérez", "telefono": "3001234567"}'
```

### Ejemplo para ver las personas

```bash
curl http://localhost:3000/personas
```

## Nota

Los datos se guardan solo en memoria: al apagar el servidor, se pierden.

## Tecnologías

- Node.js
- Express
