import NoteRepository from "../repository/Notes-repository.js";

class NoteService {
  constructor() {
    this.noteRepository = new NoteRepository();
  }
  async create(note) {
    try {
      const newNote = await this.noteRepository.create(note);
      return newNote;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const newNote = await this.noteRepository.destroy(id);
      return newNote;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const res = await this.noteRepository.get(id);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const res = await this.noteRepository.update(id, data);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default NoteService;
