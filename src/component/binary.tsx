type Props = React.HTMLAttributes<HTMLSpanElement> & {
    children: number;
    bitSize?: number;
    extraBitProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export const Binary = ({ children, extraBitProps: extraProps, bitSize: maxSize = 0, ...props }: Props) => {
    const size = maxSize - children.toString(2).length;

    return (
        <span {...props}>
            {size > 0 ? <span {...extraProps}>{'0'.repeat(size)}</span> : null}
            {children.toString(2)}
        </span>
    );
};
