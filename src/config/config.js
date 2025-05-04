import mysql from 'mysql2/promise';

export const PORT = '3000';
export const connection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'mrxhex'
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