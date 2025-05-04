import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name } = data;
        const [rows] = await pool.query('INSERT INTO payment_method (payment_method) VALUES (?)', [name]);
        return {
            id: rows.insertId,
            name
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, name, entityId   } = data;
        await pool.query(`UPDATE payment_method 
            SET
            payment_method = IFNULL(?, payment_method)
            WHERE id_payment = ? `, [ name, entityId , id]);
        const [rows] = await pool.query('SELECT * FROM payment_method WHERE id_payment =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM payment_method WHERE id_payment =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from payment_method');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM payment_method WHERE id_payment =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};