import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name } = data;
        const [rows] = await pool.query('INSERT INTO made_yarn (yarn_name) VALUES (?)', [name]);
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
        await pool.query('UPDATE made_yarn SET yarn_name = IFNULL(?, yarn_name) WHERE id_made_yarn = ?', [name, id]);
        const [rows] = await pool.query('SELECT * FROM made_yarn WHERE id_made_yarn =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM made_yarn WHERE id_made_yarn =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from made_yarn');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM made_yarn WHERE id_made_yarn =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};