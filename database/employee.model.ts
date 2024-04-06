import { Schema, models, model, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  firstName: string;
  shops: string;
}

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  shops: { type: String, required: true },
});

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;
