"use client";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  placeholder?: string;
  options: SelectOptions[];
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  size,
  value,
  label,
  options,
  defaultValue,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{
              width: "100%",
            }}
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
