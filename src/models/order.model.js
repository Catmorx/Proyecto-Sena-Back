import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { transactionNumber, salesRep, taxAmount, memo, discountAmount, entityId } = data;
        const date =  new Date()
        const [rows] = await pool.query('INSERT INTO orders (transaction_number, last_modified, created_date, sales_rep, tax_amount, memo_transaction, discount_amount, entity_id_entity) VALUES (?,?,?,?,?,?,?,?)', [transactionNumber, date, date, salesRep, taxAmount, memo, discountAmount, entityId ]);
        return {
            id: rows.insertId,
            transactionNumber, lastModified: date, salesRep, taxAmount, memo, discountAmount, entityId ,
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, transactionNumber, salesRep, taxAmount, memo, discountAmount, entityId  } = data;
        await pool.query(`UPDATE orders 
            SET
            transaction_number = IFNULL(?, transaction_number),
            last_modified = IFNULL(?, last_modified),
            sales_rep = IFNULL(?, sales_rep),
            tax_amount = IFNULL(?, tax_amount),
            memo_transaction = IFNULL(?, memo_transaction),
            discount_amount = IFNULL(?, discount_amount),
            entity_id_entity = IFNULL(?, entity_id_entity)
            WHERE id_orders = ? `, [transactionNumber, new Date(), salesRep, taxAmount, memo, discountAmount, entityId , id]);
        const [rows] = await pool.query('SELECT * FROM orders WHERE id_orders =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM orders WHERE id_orders =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query('Select * from orders');
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM orders WHERE id_orders =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};