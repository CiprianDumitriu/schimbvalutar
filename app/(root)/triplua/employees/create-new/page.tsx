"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmployeeSchema } from "@/lib/validations";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { createEmployee } from "@/lib/actions/employee.action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EmployeeForm() {
  // eslint-disable-next-line no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const pathname = usePathname();

  const form = useForm<z.infer<typeof EmployeeSchema>>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: {
      name: "",
      firstName: "",
      title: "",
      workableHours: "",
      flexible: "false",
      // shops: [],
    },
  });

  async function onSubmit(values: z.infer<typeof EmployeeSchema>) {
    setIsSubmitting(true);

    try {
      await createEmployee({
        name: values.name,
        firstName: values.firstName,
        // shops: values.shops,
        title: values.title,
        workableHours: values.workableHours,
        flexible: values.flexible,
      });
      router.push("/triplua/employees");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  // const handleInputKeyDown = (
  //   e: React.KeyboardEvent<HTMLInputElement>,
  //   field: any
  // ) => {
  //   if (e.key === "Enter" && field.name === "shops") {
  //     e.preventDefault();
  //     console.log(field.value);
  //     const shopInput = e.target as HTMLInputElement;
  //     const shopValue = shopInput.value.trim();

  //     if (shopValue !== "") {
  //       if (shopValue.length > 15) {
  //         return form.setError("shops", {
  //           type: "required",
  //           message: "Shop must be less than 15 characters.",
  //         });
  //       }

  //       if (!field.value.includes(shopValue as never)) {
  //         form.setValue("shops", [...field.value, shopValue]);
  //         shopInput.value = "";
  //         form.clearErrors("shops");
  //       }
  //     } else {
  //       form.trigger();
  //     }
  //   }
  // };

  // const handleShopRemove = (shop: string, field: any) => {
  //   const newShops = field.value.filter((t: string) => t !== shop);

  //   form.setValue("shops", newShops);
  // };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workableHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workable Hours</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="flexible"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flexible</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select if employee can work in different shops" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="shops"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shops</FormLabel>
              <FormControl>
                <>
                  <Input
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />

                  <div className=" mt-2.5 gap-2.5">
                    {field.value.map((shop: any) => (
                      <Badge
                        key={shop}
                        className="flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                        onClick={() => handleShopRemove(shop, field)}
                      >
                        {shop}
                      </Badge>
                    ))}
                  </div>
                </>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
