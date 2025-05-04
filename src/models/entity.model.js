import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { foreigner, typeIdentification, email, phone, firstName, lastName, entityType, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId, paymentId } = data;
        const date = new Date();
        const [rows] = await pool.query('INSERT INTO entity (foreigner, type_identification, email, phone, first_name, last_name, entity_type, number_identification, verification_digit, company_name, economy_activity_id_economy, health_entity_id_health, blood_type_id_blood, created_date, payment_method_id_payment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [foreigner, typeIdentification, email, phone, firstName, lastName, entityType, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId, date, paymentId]);
        return {
            id: rows.insertId,
            foreigner,
            typeIdentification,
            email,
            phone,
            firstName,
            lastName,
            entityType,
            numberIdentification,
            verificationDigit,
            companyName,
            economyActivityId,
            healthId,
            bloodId,
            created_date: date,
            paymentId,
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, foreigner, typeIdentification, email, phone, firstName, lastName, entityType, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId, paymentId } = data;
        console.log(paymentId)
        await pool.query(`UPDATE entity 
            SET
            foreigner = IFNULL(?, foreigner),
            type_identification = IFNULL(?, type_identification),
            email = IFNULL(?, email),
            phone = IFNULL(?, phone),
            first_name = IFNULL(?, first_name),
            last_name = IFNULL(?, last_name),
            entity_type = IFNULL(?, entity_type),
            number_identification = IFNULL(?, number_identification),
            verification_digit = IFNULL(?, verification_digit),
            company_name = IFNULL(?, company_name),
            economy_activity_id_economy = IFNULL(?, economy_activity_id_economy),
            health_entity_id_health = IFNULL(?, health_entity_id_health),
            blood_type_id_blood = IFNULL(?, blood_type_id_blood),
            payment_method_id_payment = IFNULL(?, payment_method_id_payment)
            WHERE id_entity = ? `,
        [foreigner, typeIdentification, email, phone, firstName, lastName, entityType, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId, paymentId, id]);
        const [rows] = await pool.query('SELECT * FROM entity WHERE id_entity =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const deleteById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query('DELETE FROM entity WHERE id_entity =?', [id]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getAll = async (data) => {
    try {
        const { entityType } = data;
        const [rows] = await pool.query(`SELECT * FROM entity WHERE entity.entity_type = ?`, [entityType]);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query(`SELECT * FROM entity WHERE id_entity =?`, [id]);
        return rows;
    } catch (e) {
        return e;
    }
};