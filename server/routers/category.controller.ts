import express, { Request, Response } from 'express';
import Category from '../Models/Category';
import { upload } from '../utils/multer';

const router = express.Router();

// CREATE
router.post('/', upload.single('icon'), async (req: Request, res: Response) => {
  try {
    const { name, slug, services } = req.body;
    const icon = req.file ? req.file.path : ''; 
    const category = new Category({
      name,
      slug,
      icon,
      services
    });
    await category.save();
    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// UPDATE
router.put('/:id', upload.single('icon'), async (req: Request, res: Response) => {
  try {
    const { name, slug, services } = req.body;
    const icon = req.file ? req.file.path : ''; 
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {
      name,
      slug,
      icon,
      services
    }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    res.json({ success: true, updatedCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// READ
router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    res.json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
