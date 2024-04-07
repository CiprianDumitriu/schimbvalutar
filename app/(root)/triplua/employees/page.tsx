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

const Employees = () => {
  return (
    <main className="bg-[#FFFFFF]">
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
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default Employees;
