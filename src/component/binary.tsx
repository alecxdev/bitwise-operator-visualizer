type Props = React.HTMLAttributes<HTMLSpanElement> & {
    children: number;
    bitSize?: number;
}

export const Binary = ({ children, bitSize: maxSize = 0, ...props }: Props) => (
    <span {...props}>{children.toString(2).padStart(maxSize, '0')}</span>
);
