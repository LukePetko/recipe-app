"use client";
import {
  type CreateRecipeSchemaType,
  createRecipeSchema,
} from "@/schemas/createRecipe.schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";

export default function CreateRecipeForm() {
  const form = useForm<CreateRecipeSchemaType>({
    resolver: zodResolver(createRecipeSchema),
    defaultValues: {
      title: "",
      description: "",
      prepTime: 0,
      cookTime: 0,
      totalTime: 0,
      servings: 0,
    },
  });

  const onSubmit = (values: CreateRecipeSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="h-12 text-md"
                  placeholder="Garlic soup"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  className="h-12 text-md"
                  placeholder="Delicous garlic soup made..."
                  type="textarea"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prepTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prep Time</FormLabel>
              <FormControl>
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Recipe</Button>
      </form>
    </Form>
  );
}
