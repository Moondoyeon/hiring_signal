export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  style?: string;
};
export default function Label({ children, style }: LabelProps) {
  return <label className={`block text-2xl font-bold ${style}`}>{children}</label>;
}
