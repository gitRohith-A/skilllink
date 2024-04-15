import express, { Request, Response } from 'express';
import EnterpriseModel, { Enterprise } from '../Models/Enterprise';
import { upload } from '../utils/multer';

const router = express.Router();

// Create Enterprise
router.post('/', upload.single('icon'), async (req: Request, res: Response) => {
    try {
        const enterpriseData: Enterprise = req.body as Enterprise;
        if (req.file) {
            enterpriseData.icon = req.file.path;
        }
        const newEnterprise = await EnterpriseModel.create(enterpriseData);
        res.status(201).json(newEnterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Read All Enterprises
router.get('/', async (req: Request, res: Response) => {
    try {
        const enterprises = await EnterpriseModel.find();
        res.status(200).json(enterprises);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Read Enterprise by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const enterprise = await EnterpriseModel.findById(req.params.id);
        if (!enterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }
        res.status(200).json(enterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Update Enterprise by ID
router.put('/:id', upload.single('icon'), async (req: Request, res: Response) => {
    try {
        const enterpriseData: Enterprise = req.body as Enterprise;
        if (req.file) {
            enterpriseData.icon = req.file.path; 
        }
        const updatedEnterprise = await EnterpriseModel.findByIdAndUpdate(req.params.id, enterpriseData, { new: true });
        if (!updatedEnterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }
        res.status(200).json(updatedEnterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Enterprise by ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedEnterprise = await EnterpriseModel.findByIdAndDelete(req.params.id);
        if (!deletedEnterprise) {
            return res.status(404).json({ error: 'Enterprise not found' });
        }
        res.status(200).json(deletedEnterprise);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

module.exports= router;
