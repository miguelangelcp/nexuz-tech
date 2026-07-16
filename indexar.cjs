const { google } = require('googleapis');
const path = require('path');

// 🚀 Agrega aquí todas las URLs de tu web en Vercel que quieras indexar (Máximo 200 por día)
const urlsParaIndexar = [
  'https://nexuz-tech.vercel.app'
];

// Le indicamos a Google la ruta exacta de tu archivo de credenciales
const rutaClave = path.join(__dirname, 'service-account.json');

const jwtClient = new google.auth.JWT({
  keyFile: rutaClave,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

// Autenticar y ejecutar el envío
jwtClient.authorize(async (err, tokens) => {
  if (err) {
    console.error('❌ Error crítico de autenticación:', err);
    return;
  }

  console.log('🔒 Autenticación exitosa con Google Cloud.');
  const request = google.indexing({ version: 'v3', auth: jwtClient });

  // Recorrer el arreglo de URLs y enviarlas una por una
  for (const url of urlsParaIndexar) {
    try {
      const response = await request.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`✅ ¡Éxito! Solicitud enviada para: ${url}`);
    } catch (error) {
      console.error(`❌ Error al enviar la URL (${url}):`, error.response ? error.response.data : error.message);
    }
  }
  
  console.log('🏁 Proceso de indexación finalizado.');
});