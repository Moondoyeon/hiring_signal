'use client';

import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  style?: string;
  errorStyle?: string;
};

function InputText<T extends FieldValues>({
  id,
  name,
  control,
  rules,
  placeholder,
  style,
  errorStyle,
}: UseControllerProps<T> & InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, control });
  return (
    <>
      <input
        type="text"
        id={id}
        {...field}
        placeholder={placeholder}
        className={`w-full text-2xl placeholder:text-[#FFBFB7] placeholder:text-2xl placeholder:font-bold indent-3 py-3 focus:outline-none focus:ring mobile:text-base mobile:py-2 mobile:indent-2 mobile:placeholder:text-base ${style}`}
      />
      <p className={`h-6 my-1 text-black mobile:h-4 mobile:text-sm ${errorStyle}`}>
        {error?.message}
      </p>
    </>
  );
}

export default InputText;
