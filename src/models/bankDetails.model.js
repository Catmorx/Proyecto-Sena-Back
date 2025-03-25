import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { typeAccount, numberAccount, bankCode, is_prefer, entityId} = data;
        const [rows] = await pool.query('INSERT INTO bank_details (type_account, number_account, bank_code, is_prefer, entity_id_entity) VALUES (?,?,?,?,?)', [typeAccount, numberAccount, bankCode, is_prefer, entityId]);
        return {
            id: rows.insertId,
            typeAccount, numberAccount, bankCode, is_prefer, entityId
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, typeAccount, numberAccount, bankCode, is_prefer, entityId } = data;
        await pool.query(`UPDATE bank_details 
            SET
            type_account = IFNULL(?, type_account),
            number_account = IFNULL(?, number_account),
            bank_code = IFNULL(?, bank_code),
            is_prefer = IFNULL(?, is_prefer),
            entity_id_entity = IFNULL(?, entity_id_entity)
            WHERE id_bank_details = ? `,
        [typeAccount, numberAccount, bankCode, is_prefer, entityId, id]);
        const [rows] = await pool.query('SELECT * FROM bank_details WHERE id_bank_details =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM bank_details WHERE id_bank_details =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from bank_details');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM bank_details WHERE id_bank_details =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};