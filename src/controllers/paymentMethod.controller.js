import { create, update, deleteById, getAll, getById } from '../models/paymentMethod.model.js';

export const createPaymentMethod = async (req, res) => {
    try {
        const success = await create(req.body);
        res.status(201).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const updatePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, entityId } = req.body;
        const data = { id, name, entityId };
        const success = await update(data);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(202).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deletePaymentMethodById = async (req, res) => {
    try {
        const success = await deleteById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAllPaymentMethod = async (req, res) => {
    try {
        const success = await getAll();
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getPaymentMethodById = async (req, res) => {
    try {
        const success = await getById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Data Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};