import { create, update, deleteById, getAll, getById } from '../models/catalog.model.js';

export const createCatalog = async (req, res) => {
    try {
        const success = await create(req.body);
        res.status(201).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const updateCatalog = async (req, res) => {
    try {
        const { id } = req.params;
        const { season, description, copyright, terms, branch, categoryId } = req.body;
        const data = { id, season, description, copyright, terms, branch, categoryId };
        const success = await update(data);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(202).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteCatalogById = async (req, res) => {
    try {
        const success = await deleteById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAllCatalog = async (req, res) => {
    try {
        const success = await getAll();
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getCatalogById = async (req, res) => {
    try {
        const success = await getById(req.params);
        if (success.length == 0) return res.status(404).json({ status: 'Data Not Found' });
        res.status(200).json(success);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
