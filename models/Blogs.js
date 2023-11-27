import mongoose from "mongoose";

const Blogs = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blogs", Blogs);
