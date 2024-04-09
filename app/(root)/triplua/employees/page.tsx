import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllEmployees } from "@/lib/actions/employee.action";
import EmployeeForm from "@/components/forms/EmployeeForm";

const Employees = async () => {
  const result = await getAllEmployees({});

  console.log(result);

  return (
    <>
      <div className="bg-[#FFFFFF]">
        <h1>Bridge</h1>
        <Table>
          <TableCaption>A list of your all Bridge employees</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">First Name</TableHead>
              <TableHead className="w-[150px]">Last Name</TableHead>
              <TableHead className="w-[150px]">Workable hours</TableHead>
              <TableHead className="w-[150px] text-center">Flexible</TableHead>
              <TableHead className="w-[150px] text-right">
                Exchange Shops
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result.employees.map((employee) => (
              <TableRow key={employee._id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-center">$250.00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className=" bg-[#FFFFFF]">
        <EmployeeForm />
      </div>
    </>
  );
};

export default Employees;
