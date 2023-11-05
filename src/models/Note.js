import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [1000, "Notes length exceede"],
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);
export default Note;


