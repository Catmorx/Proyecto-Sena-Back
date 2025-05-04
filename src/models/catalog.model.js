import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { season, description, copyright, terms, branch, categoryId } = data;
        const [rows] = await pool.query('INSERT INTO catalog (season, description, copyrights, terms, branch, category_id_category) VALUES (?,?,?,?,?,?)', [season, description, copyright, terms, branch, categoryId]);
        return {
            id: rows.insertId,
            season, description, copyright, terms, branch, categoryId,
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, season, description, copyright, terms, branch, categoryId } = data;
        const result = await pool.query(`UPDATE catalog
        SET
            season               = IFNULL(?, season),
            description          = IFNULL(?, description),
            copyrights           = IFNULL(?, copyrights),
            terms                = IFNULL(?, terms),
            branch               = IFNULL(?, branch),
            category_id_category = IFNULL(?, category_id_category)  -- sin coma aquí
        WHERE id_catalog = ?`,
            [season, description, copyright, terms, branch, categoryId, id]);
        const [rows] = await pool.query('SELECT * FROM catalog WHERE id_catalog =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM catalog WHERE id_catalog =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from catalog');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM catalog WHERE id_catalog =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};