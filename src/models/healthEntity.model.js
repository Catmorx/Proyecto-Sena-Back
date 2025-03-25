import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name } = data;
        const [rows] = await pool.query('INSERT INTO health_entity (health_name) VALUES (?)', [name]);
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
        await pool.query('UPDATE health_entity SET health_name = IFNULL(?, health_name) WHERE id_health = ?', [name, id]);
        const [rows] = await pool.query('SELECT * FROM health_entity WHERE id_health =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM health_entity WHERE id_health =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from health_entity');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM health_entity WHERE id_health =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};