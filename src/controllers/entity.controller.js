import { create, update, deleteById, getAll, getById } from '../models/entity.model.js';

export const createEntity = async (req, res) => {
    try {
        const success = await create(req.body);
        res.status(201).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const updateEntity = async (req, res) => {
    try {
        const { id } = req.params;
        const { foreigner, typeIdentification, email, phone, firstName, lastName, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId } = req.body;
        const data = { id, foreigner, typeIdentification, email, phone, firstName, lastName, numberIdentification, verificationDigit, companyName, economyActivityId, healthId, bloodId };
        const success = await update(data);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(202).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteEntityById = async (req, res) => {
    try {
        const success = await deleteById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAllEntity = async (req, res) => {
    try {
        const success = await getAll();
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getEntityById = async (req, res) => {
    try {
        const success = await getById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Data Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
