import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name } = data;
        const [rows] = await pool.query('INSERT INTO blood_type (blood_name) VALUES (?)', [name]);
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
        const { id, name } = data;
        await pool.query('UPDATE blood_type SET blood_name = IFNULL(?, blood_name) WHERE id_blood = ?', [name, id]);
        const [rows] = await pool.query('SELECT * FROM blood_type WHERE id_blood =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM blood_type WHERE id_blood =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from blood_type');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM blood_type WHERE id_blood =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};