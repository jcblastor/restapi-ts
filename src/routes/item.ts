import { Router } from "express";

import { 
  getItems,
  getItemById,
  createItem,
  updateItemById,
  deleteItemById,
} from "../controllers/item";

const router = Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id', updateItemById);
router.delete('/:id', deleteItemById);

export { router };
