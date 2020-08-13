/**
 * We are unable to re-export types as our tsconfig has --isolatedModules set to
 * true (For babel 7 transpiling reasons) Please have a look at this typescript
 * issue to explain our work around.
 * https://github.com/microsoft/TypeScript/issues/28481#issuecomment-552938424
 */

// PLEASE EXPORT CORE UI COMPONENTS ONLY

// Core
import { DatePicker } from "./DatePicker/DatePicker";
import { KeyboardDatePicker } from "./KeyboardDatePicker/KeyboardDatePicker";
import { DatePickerProvider } from "./DatePickerProvider/DatePickerProvider";

export type DatePickerProps = import("./DatePicker/DatePicker").DatePickerProps;
export type KeyboardDatePickerProps = import("./KeyboardDatePicker/KeyboardDatePicker").KeyboardDatePickerProps;

export { DatePicker, KeyboardDatePicker, DatePickerProvider };

export const Components = {
  DatePicker,
  KeyboardDatePicker,
  DatePickerProvider,
};

// Non components
