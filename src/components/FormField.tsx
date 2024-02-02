import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as UIFormField,
} from "./ui/form";
import { Input } from "./ui/input";
import { FieldValues, UseFormReturn } from "react-hook-form";

type FormFieldProps<
  TForm extends UseFormReturn<FieldValues> = UseFormReturn<FieldValues>,
> = React.ComponentProps<typeof UIFormField> & {
  title?: string;
  placeholder?: string;
  description?: string;
  form: TForm;
};

function FormField<TForm>({
  form,
  name,
  title,
  placeholder,
  description,
}: FormFieldProps<TForm>) {
  return (
    <UIFormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel>{title}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormField;
