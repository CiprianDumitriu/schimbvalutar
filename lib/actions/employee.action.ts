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

    Employee.findById(employee._id);

    employee.save();
  } catch (error) {}
}

export async function getAllEmployees(params: any) {
  try {
    connectToDatabase();

    const employees = await Employee.find({});

    return { employees };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
