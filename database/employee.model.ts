import { Schema, models, model, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  firstName: string;
  title: string;
  shops: Schema.Types.ObjectId[];
  workableHours: number;
  createdAt: Date;
  flexible: boolean;
}

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  title: { type: String, required: true },
  workableHours: { type: Number },
  shops: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
  flexible: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;
