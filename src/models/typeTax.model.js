import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name, percentage } = data;
        const [rows] = await pool.query('INSERT INTO type_tax (tax_name,percentage) VALUES (?,?)', [name, percentage]);
        return {
            id: rows.insertId,
            name,
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, name, percentage } = data;
        await pool.query('UPDATE type_tax SET tax_name = IFNULL(?, tax_name), percentage = IFNULL(?, percentage) WHERE id_type_tax = ?', [name, percentage, id]);
        const [rows] = await pool.query('SELECT * FROM type_tax WHERE id_type_tax =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM type_tax WHERE id_type_tax =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from type_tax');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM type_tax WHERE id_type_tax =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};