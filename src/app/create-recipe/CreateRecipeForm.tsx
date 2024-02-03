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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "react-feather";
import { useRouter } from "next/navigation";

type CreateRecipeFormProps = {
  createRecipe: (values: CreateRecipeSchemaType) => void;
};

export default function CreateRecipeForm({
  createRecipe,
}: CreateRecipeFormProps) {
  const form = useForm<CreateRecipeSchemaType>({
    resolver: zodResolver(createRecipeSchema),
    defaultValues: {
      title: "",
      description: "",
      prepTime: 0,
      cookTime: 0,
      totalTime: 0,
      servings: 4,
    },
  });

  const [prepHours, setPrepHours] = React.useState(0);
  const [prepMinutes, setPrepMinutes] = React.useState(0);
  const [cookHours, setCookHours] = React.useState(0);
  const [cookMinutes, setCookMinutes] = React.useState(0);

  const router = useRouter();

  const onSubmit = (values: CreateRecipeSchemaType) => {
    console.log({ ...values, totalTime: values.prepTime + values.cookTime });
    createRecipe({ ...values, totalTime: values.prepTime + values.cookTime });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-2 items-center pt-2">
          <ArrowLeft onClick={() => router.back()} size={28} />
          <h1 className="text-3xl font-bold">Create Recipe</h1>
        </div>
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
        <h2 className="text-2xl font-bold">Time</h2>
        <div className="flex md:gap-8 gap-4 md:flex-row flex-col">
          <FormItem>
            <FormLabel>Prep Time</FormLabel>
            <FormControl>
              <div className="flex gap-5 w-64">
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  value={Math.floor(form.watch("prepTime") / 60)}
                  onChange={(e) => {
                    form.setValue(
                      "prepTime",
                      +e.target.value * 60 + prepMinutes,
                    );
                    setPrepHours(+e.target.value);
                  }}
                  unit="hours"
                />
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  value={form.watch("prepTime") % 60}
                  onChange={(e) => {
                    form.setValue("prepTime", prepHours * 60 + +e.target.value);
                    setPrepMinutes(+e.target.value);
                  }}
                  unit="minutes"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Cook Time</FormLabel>
            <FormControl>
              <div className="flex gap-5 w-64">
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  inputMode="numeric"
                  value={Math.floor(form.watch("cookTime") / 60)}
                  onChange={(e) => {
                    form.setValue(
                      "cookTime",
                      +e.target.value * 60 + cookMinutes,
                    );
                    setCookHours(+e.target.value);
                  }}
                  unit="hours"
                />
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  inputMode="numeric"
                  value={form.watch("cookTime") % 60}
                  onChange={(e) => {
                    form.setValue("cookTime", cookHours * 60 + +e.target.value);
                    setCookMinutes(+e.target.value);
                  }}
                  unit="minutes"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Total Time</FormLabel>
            <FormControl>
              <div className="flex gap-5 w-64">
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  disabled
                  value={Math.floor(
                    (+form.watch("prepTime") + +form.watch("cookTime")) / 60,
                  )}
                  unit="hours"
                />
                <Input
                  className="h-12 text-md"
                  type="number"
                  placeholder="20"
                  disabled
                  value={
                    (+form.watch("prepTime") + +form.watch("cookTime")) % 60
                  }
                  onChange={(e) => console.log(e)}
                  unit="minutes"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
        <FormField
          control={form.control}
          name="servings"
          render={({ field }) => (
            <FormItem className="w-[120px]">
              <FormLabel>Servings</FormLabel>
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
