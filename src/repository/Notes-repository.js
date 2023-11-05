import Note from "../models/Note";

class NoteRepository {
  async create(data) {
    try {
      const note = await Note.create(data);
      return data;
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
      throw error;
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const Updatedata = await Note.findByIdAndUpdate(id, data);
      return Updatedata;
    } catch (error) {
      throw error;
      console.log(error);
    }
  }
}

export default NoteRepository;
