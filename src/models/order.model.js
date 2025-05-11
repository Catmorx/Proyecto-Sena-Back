import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { salesRep, taxAmount, subtotal, total, memo, discountAmount, entityId, items } = data;
        const date = new Date()
        const [rows] = await pool.query('INSERT INTO orders (last_modified, created_date, sales_rep, tax_amount, subtotal, total,memo_transaction, discount_amount, entity_id_entity) VALUES (?,?,?,?,?,?,?,?,?)', [date, date, salesRep, taxAmount, subtotal, total, memo, discountAmount, entityId]);

        for (const item of items) {
            const {
                description, quantity, unit_price, tax_amount, tax_percentage, discount_percentage, discount_amount, total_amount, item_id_item
            } = item;

            await pool.query(
                `INSERT INTO order_item 
                    (description, quantity, unit_price, tax_amount, tax_percentage, discount_percentage, discount_amount, total_amount, item_id_item, order_id_orders)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [description, quantity, unit_price, tax_amount, tax_percentage, discount_percentage, discount_amount, total_amount, item_id_item, rows.insertId]

            );
        }
        return {
            id: rows.insertId,
            lastModified: date, salesRep, taxAmount, memo, discountAmount, entityId, subtotal, total,
            items
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, salesRep, taxAmount, subtotal, total, memo, discountAmount, entityId, items } = data;
        console.log('data', data);
        await pool.query(`UPDATE orders 
            SET
            subtotal = IFNULL(?, subtotal),
            total = IFNULL(?, total),
            last_modified = IFNULL(?, last_modified),
            sales_rep = IFNULL(?, sales_rep),
            tax_amount = IFNULL(?, tax_amount),
            memo_transaction = IFNULL(?, memo_transaction),
            discount_amount = IFNULL(?, discount_amount),
            entity_id_entity = IFNULL(?, entity_id_entity)
            WHERE id_orders = ? `, [subtotal, total, new Date(), salesRep, taxAmount, memo, discountAmount, entityId, id]);
        for (const item of items) {
            const {
                description, quantity, unit_price, tax_amount, tax_percentage, discount_percentage, discount_amount, total_amount, item_id_item, id_order_item
            } = item;
            if (id_order_item) {
                await pool.query(`
                    UPDATE order_item 
                    SET
                        description = IFNULL(?, description),
                        quantity = IFNULL(?, quantity),
                        unit_price = IFNULL(?, unit_price),
                        tax_amount = IFNULL(?, tax_amount),
                        tax_percentage = IFNULL(?, tax_percentage),
                        discount_percentage = IFNULL(?, discount_percentage),
                        discount_amount = IFNULL(?, discount_amount),
                        total_amount = IFNULL(?, total_amount),
                        item_id_item = IFNULL(?, item_id_item),
                        order_id_orders = IFNULL(?, order_id_orders)
                    WHERE id_order_item = ?`,
                    [
                        description, quantity, unit_price, tax_amount, tax_percentage,
                        discount_percentage, discount_amount, total_amount,
                        item_id_item, id, id_order_item
                    ]
                );
            } else {
                await pool.query(`
                    INSERT INTO order_item (
                        description, quantity, unit_price, tax_amount, tax_percentage,
                        discount_percentage, discount_amount, total_amount,
                        item_id_item, order_id_orders
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        description, quantity, unit_price, tax_amount, tax_percentage,
                        discount_percentage, discount_amount, total_amount,
                        item_id_item, id
                    ]
                );
            }
        }
        const [rows] = await pool.query(`SELECT 
            o.id_orders,
            o.last_modified,
            o.created_date,
            o.sales_rep,
            o.tax_amount,
            o.subtotal,
            o.total,
            o.memo_transaction,
            o.discount_amount,
            o.entity_id_entity,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    'id_order_item', oi.id_order_item,
                    'description', oi.description,
                    'quantity', oi.quantity,
                    'unit_price', oi.unit_price,
                    'tax_amount', oi.tax_amount,
                    'tax_percentage', oi.tax_percentage,
                    'discount_percentage', oi.discount_percentage,
                    'discount_amount', oi.discount_amount,
                    'total_amount', oi.total_amount,
                    'item_id_item', oi.item_id_item,
                    'order_id_orders', oi.order_id_orders
                )
            ) AS items
        FROM orders o
        LEFT JOIN order_item oi ON o.id_orders = oi.order_id_orders
        WHERE o.id_orders = ?
        GROUP BY o.id_orders`, [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rowsItem] = await pool.query('DELETE FROM order_item WHERE order_id_orders =?', [id]);
        const [rows] = await pool.query('DELETE FROM orders WHERE id_orders =?', [id]);
        return rowsItem;
    } catch (e) {
        return e;
    }
};
export const deleteByIdItemOrder = async (data) => {
    try {
        const { id } = data;
        const [rowsItem] = await pool.query('DELETE FROM order_item WHERE id_order_item =?', [id]);
        return rowsItem;
    } catch (e) {
        return e;
    }
};
export const getAll = async () => {
    try {
        const [rows] = await pool.query(`
            SELECT 
            o.id_orders,
            o.last_modified,
            o.created_date,
            o.sales_rep,
            o.tax_amount,
            o.subtotal,
            o.total,
            o.memo_transaction,
            o.discount_amount,
            o.entity_id_entity,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    'id_order_item', oi.id_order_item,
                    'description', oi.description,
                    'quantity', oi.quantity,
                    'unit_price', oi.unit_price,
                    'tax_amount', oi.tax_amount,
                    'tax_percentage', oi.tax_percentage,
                    'discount_percentage', oi.discount_percentage,
                    'discount_amount', oi.discount_amount,
                    'total_amount', oi.total_amount,
                    'item_id_item', oi.item_id_item,
                    'order_id_orders', oi.order_id_orders
                )
            ) AS items
        FROM orders o
        LEFT JOIN order_item oi ON o.id_orders = oi.order_id_orders
        GROUP BY o.id_orders;`);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('SELECT * FROM orders WHERE id_orders =?', [id]);
        const [rowsItems] = await pool.query('SELECT * FROM order_item oi WHERE oi.order_id_orders =?', [id]);
        rows[0].items = rowsItems;
        return rows;
    } catch (e) {
        return e;
    }
};