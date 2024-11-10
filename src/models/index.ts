export const BITWISE_OPERATORS = {
    AND: 'and',
    OR: 'or',
    XOR: 'xor',
} as const;

export type Bitwise = typeof BITWISE_OPERATORS[keyof typeof BITWISE_OPERATORS];
