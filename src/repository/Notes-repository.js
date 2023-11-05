import Note from "../models/Note.js";
class NoteRepository {
  async create(data) {
    try {
      const note = await Note.create(data);
      return note;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const res = await Note.findByIdAndDelete(id);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const res = await Note.findById(id);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const Updatedata = await Note.findByIdAndUpdate(id, data);
      return Updatedata;
    } catch (error) {
      console.log(error);
        throw error;
    }
  }
}

export default NoteRepository;
