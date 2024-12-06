const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Configuración de CORS
app.use(cors({ origin: ['http://localhost:3000', 'https://guillermoillanes.com'] }));

// Middleware para encabezados CORS adicionales
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Cambia '*' por tu dominio en producción
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente. Usa /send-email para enviar correos.');
});

// Ruta para enviar correos
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Datos recibidos del cliente:", { name, email, message });

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Por favor, completa todos los campos.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'inowbut456@gmail.com', // Cambia por tu correo
            pass: 'logw lryj elzm alkw',  // Cambia por tu contraseña de aplicación
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"Portfolio Contact" <${email}>`,
            to: 'guillermoillanes233@gmail.com',
            subject: `Nuevo mensaje de ${name}`,
            text: message,
        });

        console.log("Correo enviado:", info.response);
        res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ error: 'Hubo un problema al enviar el correo.' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
