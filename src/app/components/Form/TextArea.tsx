'use client';

import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

interface Props {
  placeholder?: string;
  style?: string;
  errorStyle?: string;
}
function Textarea<T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  style = 'w-full text-2xl h-[300px] placeholder:text-[#FFBFB7] placeholder:text-2xl placeholder:font-bold indent-3 py-3 focus:outline-none focus:ring',
  errorStyle = 'h-6 my-1 text-black',
}: UseControllerProps<T> & Props) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules, control });
  return (
    <>
      <textarea {...field} placeholder={placeholder} className={style} />
      <p className={errorStyle}>{error?.message}</p>
    </>
  );
}

export default Textarea;
