import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please enter the name of company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please enter the title of position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interviewed", "declined", "pending", "job offered"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: [
        "full-time",
        "part-time",
        "remote",
        "internship",
        "hybrid",
        "contract",
      ],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
