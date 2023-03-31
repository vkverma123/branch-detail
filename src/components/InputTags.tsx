import React from "react";
import { Controller } from "react-hook-form";

import { Autocomplete, Chip, TextField } from "@mui/material";

const InputTags = ({
  name,
  label,
  control,
}: React.PropsWithoutRef<{ name: string; label: string; control: any }>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <Autocomplete
          multiple
          value={props.field.value}
          filterSelectedOptions
          options={props.field.value.map((option: string) => option)}
          defaultValue={props.field.value.map((option: string) => option)}
          getOptionLabel={(option) => option}
          freeSolo
          onChange={(_event, data) => props.field.onChange(data)}
          renderTags={(value: string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ my: 1 }}
              fullWidth
              label={label}
              error={props.fieldState.isTouched && !!props.fieldState.error}
              helperText={
                props.fieldState.isTouched && props.fieldState.error?.message
              }
              disabled={props.formState.isSubmitting}
            />
          )}
        />
      )}
    />
  );
};

export default InputTags;
