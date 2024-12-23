# Portfolio Personal - Lucio Boxall


## 📝 Descripción
Portfolio personal desarrollado con React y Node.js, que muestra mis proyectos, habilidades y experiencia. Incluye un panel de administración para gestionar dinámicamente el contenido.

## ⚙️ Tecnologías Utilizadas

### Frontend
- React.js
- React Router DOM
- CSS personalizado
- Responsive Design

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## 🚀 Características

### Panel de Administración
- Gestión de proyectos (CRUD)
- Gestión de habilidades técnicas
- Sistema de mensajes de contacto
- Interfaz intuitiva y fácil de usar

### Sección Pública
- Página de inicio con presentación personal
- Galería de proyectos
- Lista de habilidades técnicas
- Formulario de contacto
- Diseño responsive para todos los dispositivos

## 💻 Instalación

### Prerrequisitos
- Node.js
- MongoDB
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** 
bash
git clone https://github.com/LucioBxll/portfolio-.git
cd portfolio-
bash
cd client
npm install
bash
cd ../server
npm install
env
MONGODB_URI=tu_uri_de_mongodb
PORT=5000
bash
cd client
npm start
bash
cd server
npm start
portfolio/
├── client/ # Frontend React
│ ├── public/ # Archivos públicos
│ └── src/ # Código fuente
│ ├── components/ # Componentes reutilizables
│ ├── views/ # Páginas y vistas
│ ├── styles/ # Archivos CSS
│ └── config/ # Configuraciones
│
├── server/ # Backend Node.js
│ ├── config/ # Configuraciones
│ ├── models/ # Modelos de MongoDB
│ ├── routes/ # Rutas de la API
│ └── server.js # Archivo principal del

## 🔧 API Endpoints

### Proyectos
- GET `/api/projects` - Obtener todos los proyectos
- POST `/api/projects` - Crear nuevo proyecto
- PUT `/api/projects/:id` - Actualizar proyecto
- DELETE `/api/projects/:id` - Eliminar proyecto

### Habilidades
- GET `/api/skills/all` - Obtener todas las habilidades
- POST `/api/skills` - Crear nueva habilidad
- PUT `/api/skills/:id` - Actualizar habilidad
- DELETE `/api/skills/:id` - Eliminar habilidad

### Contacto
- GET `/api/contact` - Obtener mensajes de contacto
- POST `/api/contact` - Enviar mensaje de contacto
- DELETE `/api/contact/:id` - Eliminar mensaje

## 🎨 Características del Diseño
- Diseño minimalista y moderno
- Paleta de colores personalizada
- Interfaz intuitiva y fácil de navegar
- Totalmente responsive
- Animaciones suaves
- Modo oscuro por defecto

## 👤 Panel de Administración
El panel de administración permite:
- Crear, editar y eliminar proyectos
- Gestionar habilidades técnicas
- Ver y gestionar mensajes de contacto
- Acceso protegido mediante autenticación

## 🔒 Seguridad
- Autenticación para el panel de administración
- Validación de datos en frontend y backend
- Sanitización de inputs
- Manejo seguro de datos sensibles

## 📱 Responsive Design
- Mobile First
- Adaptable a todos los dispositivos
- Menú hamburguesa para dispositivos móviles
- Optimización de imágenes

## 🛠️ Futuras Mejoras
- [ ] Implementar autenticación JWT
- [ ] Agregar blog personal
- [ ] Integrar sistema de analytics
- [ ] Implementar caché para mejor rendimiento
- [ ] Agregar tests automatizados

## 👨‍💻 Autor
**Lucio Boxall**
- GitHub: [@LucioBxll](https://github.com/LucioBxll)
- Portfolio: [lucioboxall.com](https://lucioboxall.com)

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.