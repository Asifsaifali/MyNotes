import NotesService from "../services/Notes-service.js";

const notesServices = new NotesService();

class NotesController {
  async getAll(req, res) {
    try {
      const notes = await notesServices.get(req.params.id);
      return res.status(200).json({
        message: "fetched data from database",
        data: notes,
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        sucess: false,
        errorMessage: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const createdNote = await notesServices.create(req.body);
      return res.status(201).json({
        message: "created a new note in the database",
        data: createdNote,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: {},
        sucess: false,
      });
    }
  }
}

export default NotesController;
