import { getByEmail } from '../models/login.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config.js';

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await getByEmail(email);

        if (!user) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }

        const token = jwt.sign(
            { id: user.id_entity },
            jwtSecret,
            { expiresIn: '1d' }
        );

        res.status(200).json({ message: "Bienvenido", token });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: "Error del servidor", error: error.message });
    }
};
