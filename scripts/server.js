const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Configuración de CORS
const corsOptions = {
    origin: 'https://guillermoillanes.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Rutas
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Por favor, completa todos los campos.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'inowbut456@gmail.com', 
            pass: 'logw lryj elzm alkw', 
        },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${email}>`,
            to: 'destinatario@gmail.com',
            subject: `Nuevo mensaje de ${name}`,
            text: message,
        });
        res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Hubo un problema al enviar el correo.' });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


