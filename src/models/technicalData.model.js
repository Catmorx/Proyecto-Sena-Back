import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { description, composition, madeYarn, printedFabric, typeFabric, name } = data;
        const date = new Date();
        const [rows] = await pool.query('INSERT INTO technical_data (description, composition, made_yarn, printed_fabric, type_fabric, created_date, name) VALUES (?,?,?,?,?,?,?)', [description, composition, madeYarn, printedFabric, typeFabric, date, name]);
        return {
            id: rows.insertId,
            name, description, composition, madeYarn, printedFabric, typeFabric, createDate: date
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, description, composition, madeYarn, printedFabric, typeFabric, name } = data;
        await pool.query(`UPDATE technical_data 
            SET
            description = IFNULL(?, description),
            composition = IFNULL(?, composition),
            made_yarn = IFNULL(?, made_yarn),
            printed_fabric = IFNULL(?, printed_fabric),
            type_fabric = IFNULL(?, type_fabric),
            name = IFNULL(?, name)
            WHERE id_technical_data = ? `,
            [description, composition, madeYarn, printedFabric, typeFabric, name, id]);
        const [rows] = await pool.query('SELECT * FROM technical_data WHERE id_technical_data =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM technical_data WHERE id_technical_data =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query(`SELECT * FROM technical_data`);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query(`SELECT *
                FROM
                    technical_data 
                WHERE id_technical_data =?`, [id]);
        return rows;
    } catch (e) {
        return e;
    }
};