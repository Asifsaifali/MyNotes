import express from 'express'
import NotesController from '../../controller/Notes-controller.js';
const notesController = new NotesController();

const router = express.Router();

router.get('/note',notesController.create);
router.post('/getnotes/:id',notesController.getAll)

export default router;