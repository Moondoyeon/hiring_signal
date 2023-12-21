export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  style?: string;
};
export default function Label({ children, htmlFor, style }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-2xl font-bold ${style}`}>
      {children}
    </label>
  );
}
