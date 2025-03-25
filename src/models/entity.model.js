import { pool } from '../config/config.js';

export const create = async (data) => {
    try {
        const { foreigner, typeIdentification, email, phone, firstName, lastName, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId } = data;
        const date = new Date();
        const [rows] = await pool.query('INSERT INTO entity (foreigner, type_identification, email, phone, first_name, last_name, number_identification, verification_digit, company_name, economy_activity_id_economy, health_entity_id_health, blood_type_id_blood, created_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [foreigner, typeIdentification, email, phone, firstName, lastName, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId, date]);
        return {
            id: rows.insertId,
            foreigner,
            typeIdentification,
            email,
            phone,
            firstName,
            lastName,
            numberIdentification,
            verificationDigit,
            companyName,
            economyActivityId,
            healthId,
            bloodId,
            created_date: new Date(),
        };
    } catch (e) {
        return e;
    }
};
export const update = async (data) => {
    try {
        const { id, foreigner, typeIdentification, email, phone, firstName, lastName, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId } = data;
        await pool.query(`UPDATE entity 
            SET
            foreigner = IFNULL(?, foreigner),
            type_identification = IFNULL(?, type_identification),
            email = IFNULL(?, email),
            phone = IFNULL(?, phone),
            first_name = IFNULL(?, first_name),
            last_name = IFNULL(?, last_name),
            number_identification = IFNULL(?, number_identification),
            verification_digit = IFNULL(?, verification_digit),
            company_name = IFNULL(?, company_name),
            economy_activity_id_economy = IFNULL(?, economy_activity_id_economy),
            health_entity_id_health = IFNULL(?, health_entity_id_health),
            blood_type_id_blood = IFNULL(?, blood_type_id_blood)
            WHERE id_entity = ? `,
        [foreigner, typeIdentification, email, phone, firstName, lastName, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId, id]);
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
export const getAll = async () => {
    try {
        const [rows] = await pool.query(`
                SELECT 
                    e.id_entity,
                    e.foreigner,
                    e.created_date,
                    e.type_identification,
                    e.email,
                    e.phone,
                    e.first_name,
                    e.last_name,
                    e.number_identification,
                    e.verification_digit,
                    e.company_name,
                    eco.activity_name AS economy_activity_name,
                    health.health_name AS health_name,
                    b.blood_name AS blood_name
                FROM
                    entity AS e
                        LEFT JOIN
                    economy_activity eco ON e.economy_activity_id_economy = eco.id_economy
                        LEFT JOIN
                    health_entity health ON e.health_entity_id_health = health.id_health
                        LEFT JOIN
                    blood_type b ON e.blood_type_id_blood = b.id_blood
                    
                `);
        return rows;
    } catch (e) {
        return e;
    }
};
export const getById = async (data) => {
    try {
        const { id } = data;
        const [rows] = await pool.query(`SELECT 
                    e.id_entity,
                    e.foreigner,
                    e.created_date,
                    e.type_identification,
                    e.email,
                    e.phone,
                    e.first_name,
                    e.last_name,
                    e.number_identification,
                    e.verification_digit,
                    e.company_name,
                    eco.activity_name AS economy_activity_name,
                    health.health_name AS health_name,
                    b.blood_name AS blood_name
                FROM
                    entity AS e
                        LEFT JOIN
                    economy_activity eco ON e.economy_activity_id_economy = eco.id_economy
                        LEFT JOIN
                    health_entity health ON e.health_entity_id_health = health.id_health
                        LEFT JOIN
                    blood_type b ON e.blood_type_id_blood = b.id_blood
                WHERE id_entity =?`, [id]);
        return rows;
    } catch (e) {
        return e;
    }
};