import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { upc, description, foreigner, comercialName, cost, rate, technicalDataId } = data;
        const [rows] = await pool.query('INSERT INTO item (code_upc, description, foreigner, created_date, comercial_name, cost, rate, technical_data_id_technical_data) VALUES (?,?,?,?,?,?,?,?)', [upc, description, foreigner, new Date(), comercialName, cost, rate, technicalDataId]);
        return {
            id: rows.insertId,
            upc, description, foreigner, comercialName, cost, rate, technicalDataId,
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, upc, description, foreigner, comercialName, cost, rate, technicalDataId } = data;
        await pool.query(`UPDATE item 
            SET
            code_upc = IFNULL(?, code_upc),
            description = IFNULL(?, description),
            foreigner = IFNULL(?, foreigner),
            comercial_name = IFNULL(?, comercial_name),
            cost = IFNULL(?, cost),
            rate = IFNULL(?, rate),
            technical_data_id_technical_data = IFNULL(?, technical_data_id_technical_data)
            WHERE id_item = ? `, [upc, description, foreigner, comercialName, cost, rate, technicalDataId, id]);
        const [rows] = await pool.query('SELECT * FROM item WHERE id_item =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM item WHERE id_item =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from item');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM item WHERE id_item =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};