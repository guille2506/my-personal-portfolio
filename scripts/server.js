const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000; 
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(bodyParser.json()); 
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente. Usa /send-email para enviar correos.');
});
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Datos recibidos del cliente:", { name, email, message });
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
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});