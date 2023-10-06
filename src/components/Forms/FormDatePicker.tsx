import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type IDatePickerProps = {
  name: string;
  label?: string;
  value?: Dayjs;
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  label,
  value,
  onChange,
  size,
}: IDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const HandleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            size={size}
            defaultValue={dayjs(field.value) || ""}
            onChange={HandleOnChange}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
