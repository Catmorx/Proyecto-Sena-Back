import { create, update, deleteById, getAll, getById } from '../models/technicalData.model.js';

export const createTechnicalData = async (req, res) => {
    try {
        const success = await create(req.body);
        res.status(201).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const updateTechnicalData = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, composition, madeYarn, printedFabric, typeFabric, name } = req.body;
        const data = { id, description, composition, madeYarn, printedFabric, typeFabric, name };
        const success = await update(data);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(202).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteTechnicalDataById = async (req, res) => {
    try {
        const success = await deleteById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAllTechnicalData = async (req, res) => {
    try {
        const success = await getAll();
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getTechnicalDataById = async (req, res) => {
    try {
        const success = await getById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Data Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};