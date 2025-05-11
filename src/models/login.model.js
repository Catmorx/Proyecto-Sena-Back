import { pool } from '../config/config.js';

export const getByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM entity WHERE email = ?', [email]);
    return rows[0] || null;
};