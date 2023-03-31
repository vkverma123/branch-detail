import React from "react";
import { useController, useForm } from "react-hook-form";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";
import InputDropDown from "../components/InputDropDown";
import InputTags from "../components/InputTags";
import { red } from "@mui/material/colors";

const FormValuesSchema = z.object({
  branchCode: z
    .string()
    .min(1)
    .refine(
      (data) => validator.isInt(data) && validator.toInt(data) >= 0,
      "Must be an integer >= 0"
    ),
  brand: z.string(),
  salesType: z.string(),
  productType: z.string(),
  tags: z.array(z.string()),
});

export type FormValues = z.infer<typeof FormValuesSchema>;

const InputText = ({
  name,
  label,
  control,
  required,
}: React.PropsWithoutRef<{
  name: string;
  label: string;
  control: any;
  required: boolean;
}>) => {
  const { field, fieldState, formState } = useController({ name, control });

  return (
    <TextField
      {...field}
      sx={{ my: 1 }}
      fullWidth
      required={required}
      label={label}
      error={fieldState.isTouched && !!fieldState.error}
      helperText={fieldState.isTouched && fieldState.error?.message}
      disabled={formState.isSubmitting}
    />
  );
};

export const DisplayForm = ({
  initialValues,
  onSubmit,
  isSaving = false,
}: React.PropsWithoutRef<{
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  isSaving?: boolean;
}>) => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    resolver: zodResolver(FormValuesSchema),
    defaultValues: initialValues,
  });

  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", color: red[700] }}
        align="center"
        variant="subtitle1"
        mb={2}
      >
        Enter Clock In Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" spacing={2} alignItems="center">
          <InputText
            name="branchCode"
            label="Branch Code"
            control={control}
            required={true}
          />
          <InputText
            name="branch"
            label="Branch"
            control={control}
            required={true}
          />
        </Stack>
        <InputDropDown
          name="brand"
          label="Brand"
          control={control}
          items={[
            { value: "Gucci", label: "Gucci" },
            { value: "Bata", label: "Bata" },
            { value: "Jockey", label: "Jockey" },
          ]}
          required={true}
        />
        <InputDropDown
          name="salesType"
          label="Sales Type"
          control={control}
          items={[
            { value: "Store", label: "Store" },
            { value: "Online", label: "Online" },
            { value: "Delivery", label: "Delivery" },
          ]}
          required={true}
        />
        <InputDropDown
          name="productType"
          label="Product Type"
          control={control}
          items={[
            { value: "Cotton", label: "Cotton" },
            { value: "Nylon", label: "Nylon" },
            { value: "Silk", label: "Silk" },
          ]}
          required={true}
        />
        <InputTags
          name="tags"
          label="Tags - Press enter after each tag (Optional)"
          control={control}
        />
        <Button
          type="submit"
          sx={{ my: 1 }}
          fullWidth
          size="large"
          variant="contained"
          disabled={isSaving}
        >
          Submit
        </Button>
      </form>
      
    </>
  );
};

export default DisplayForm;
