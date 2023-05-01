// @ts-ignore
import { DatePicker } from "@marco-polo/date-picker";
import { type ReactDatePickerProps } from "react-datepicker";
import { type ComponentPropsWithoutRef, type ComponentType } from "react";

type SmallIconProps = Omit<
  ComponentPropsWithoutRef<"svg">,
  "fill" | "stroke"
> & {
  title?: string;
  isOnDark?: boolean;
  primaryColour?: string;
};

type SupportedLocale =
  | "en"
  | "en-gb"
  | "de"
  | "es"
  | "fr"
  | "it"
  | "pt"
  | "zh"
  | "ja"
  | "ko";

export type DatePickerProps = Required<
  Pick<ReactDatePickerProps, "onChange" | "selected" | "id">
> &
  Pick<
    ReactDatePickerProps,
    | "openToDate"
    | "startDate"
    | "endDate"
    | "minDate"
    | "maxDate"
    | "name"
    | "disabled"
    | "autoFocus"
  > & {
    label: string;
    description?: string;
    title?: string;
    errorMessage?: string;
    locale?: SupportedLocale;
    prependTextIcon?: ComponentType<SmallIconProps>;
  };
export const CalendarDatePicker = (props: DatePickerProps) => {
  return <DatePicker {...props} />;
};
