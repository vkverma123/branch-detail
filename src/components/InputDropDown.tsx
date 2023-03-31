import React from "react";
import { useController } from "react-hook-form";

import { MenuItem, TextField } from "@mui/material";

type DropDownItem = {
  value: string;
  label: string;
};

const InputDropDown = ({
  name,
  label,
  control,
  items,
  required,
}: React.PropsWithoutRef<{
  name: string;
  label: string;
  control: any;
  items: Array<DropDownItem>;
  required?: boolean;
}>) => {
  const { field, fieldState, formState } = useController({ name, control });

  return (
    <TextField
      select
      sx={{ my: 1 }}
      fullWidth
      label={label}
      required={required}
      onChange={(event) => field.onChange(event.target.value)}
      value={field.value}
      error={fieldState.isTouched && !!fieldState.error}
      helperText={fieldState.isTouched && fieldState.error?.message}
      disabled={formState.isSubmitting}
    >
      {items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputDropDown;
