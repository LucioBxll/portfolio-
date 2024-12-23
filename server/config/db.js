const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
    
    // Verificar las colecciones existentes
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Colecciones disponibles:', collections.map(c => c.name));
    
    // Verificar si hay documentos en la colección projects
    const count = await mongoose.connection.db.collection('projects').countDocuments();
    console.log('Número de proyectos en la base de datos:', count);
    
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 