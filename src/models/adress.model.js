import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { adressDr1, country, town, zip, memoAdress, entityId} = data;
        const [rows] = await pool.query('INSERT INTO adress (adress_dr1, country, town, zip, memo_adress, entity_id_entity) VALUES (?,?,?,?,?,?)', [adressDr1, country, town, zip, memoAdress, entityId]);
        return {
            id: rows.insertId,
            adressDr1, adressDr2, country, town, zip, memoAdress, entityId,
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, adressDr1, country, town, zip, memoAdress, entityId } = data;
        await pool.query(`UPDATE adress 
            SET
            adress_dr1 = IFNULL(?, adress_dr1),
            country = IFNULL(?, country),
            town = IFNULL(?, town),
            zip = IFNULL(?, zip),
            memo_adress = IFNULL(?, memo_adress),
            entity_id_entity = IFNULL(?, entity_id_entity)
            WHERE id_adress = ? `,
        [adressDr1, country, town, zip, memoAdress, entityId, id]);
        const [rows] = await pool.query('SELECT * FROM adress WHERE id_adress =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM adress WHERE id_adress =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from adress');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM adress WHERE id_adress =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};