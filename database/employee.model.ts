import { Schema, models, model, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  firstName: string;
  title: string;
  shops: Schema.Types.ObjectId[];
  workableHours: string;
  createdAt: Date;
  flexible: string;
}

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  title: { type: String, required: true },
  workableHours: { type: String },
  shops: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
  flexible: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;
