import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name } = data;
        const [rows] = await pool.query('INSERT INTO economy_activity (activity_name) VALUES (?)', [name]);
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
        const { id, name } = data;
        await pool.query(`UPDATE economy_activity 
            SET
            activity_name = IFNULL(?, activity_name)
            WHERE id_economy = ? `,
        [name, id]);
        const [rows] = await pool.query('SELECT * FROM economy_activity WHERE id_economy =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM economy_activity WHERE id_economy =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from economy_activity');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM economy_activity WHERE id_economy =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};