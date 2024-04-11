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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Employees = async () => {
  const result = await getAllEmployees({});

  console.log(result);

  return (
    <>
      <div className="flex flex-col gap-4 bg-[#FFFFFF] p-10 ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Bridge Exchange</h1>
          <Link href="/triplua/employees/create-new">
            <Button>Add Employee</Button>
          </Link>
        </div>

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
    </>
  );
};

export default Employees;
