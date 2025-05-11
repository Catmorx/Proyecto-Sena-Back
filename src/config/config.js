import mysql from 'mysql2/promise';
import { config } from "dotenv";
config();
export const PORT = process.env.FRONT_PORT || 4000;
export const frontUrl = process.env.FRONT_URL 
export const jwtSecret = process.env.JWT_SECRET 
export const connection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:  process.env.DATABASE
};

export const pool = mysql.createPool(connection);

// Conectar a MySQL
// Usar el pool para ejecutar consultas
const testConnection = async () => {
    try {
        const [rows] = await pool.query('SELECT 1'); // Usa await en vez de callback
        console.log('Conexión exitosa:', rows);
    } catch (err) {
        console.error('Error en la consulta:', err);
    }
};

// Ejecutar la prueba de conexión
testConnection();