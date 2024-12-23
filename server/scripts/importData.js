const mongoose = require('mongoose');
const { exec } = require('child_process');
require('dotenv').config();

const importData = () => {
  const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
  
  exec(`mongorestore --uri="${dbUrl}" ./database`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error al importar la base de datos:', error);
      return;
    }
    console.log('Base de datos importada exitosamente');
    console.log(stdout);
  });
};

importData(); 