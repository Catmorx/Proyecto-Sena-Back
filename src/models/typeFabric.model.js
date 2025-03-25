import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { name } = data;
        const [rows] = await pool.query('INSERT INTO type_fabric (fabric_name) VALUES (?)', [name]);
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
        await pool.query('UPDATE type_fabric SET fabric_name = IFNULL(?, fabric_name) WHERE id_type_fabric = ?', [name, id]);
        const [rows] = await pool.query('SELECT * FROM type_fabric WHERE id_type_fabric =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM type_fabric WHERE id_type_fabric =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from type_fabric');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM type_fabric WHERE id_type_fabric =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};