"use server";

import Employee from "@/database/employee.model";
import { connectToDatabase } from "../mongoose";

export async function createEmployee(params: any) {
  try {
    connectToDatabase();

    const { name, firstName, shops } = params;

    // Create employee
    const employee = await Employee.create({
      name,
      firstName,
      shops,
    });

    employee.save();
  } catch (error) {}
}
