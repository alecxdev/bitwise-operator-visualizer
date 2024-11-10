import { Fragment, useMemo } from 'react';
import { Binary } from './binary';
import { Bitwise, BITWISE_OPERATORS } from '../models';

export const Operator = ({ nums, operator }: { nums: number[]; operator: Bitwise }) => {
    const xorFn = (num1: number, num2: number) => {
       return num1^num2; 
    };

    const orFn = (num1: number, num2: number) => {
        return num1^num2; 
    };

    const andFn = (num1: number, num2: number) => {
        return num1^num2; 
    };

    const total = useMemo(() => {
        let fn;

        if (operator === BITWISE_OPERATORS.XOR) {
            fn = xorFn;
        }
        if (operator === BITWISE_OPERATORS.AND) {
            fn = andFn;
        }
        if (operator === BITWISE_OPERATORS.OR) {
            fn = orFn;
        }

        if (!fn) {
            throw new Error('Bitwise unknown');
        }

        return nums.reduce(fn);
    }, [nums, operator]);


    return (
        // <div className='grid grid-cols-[1fr_repeat(3,min-content)_1fr] gap-y-6 gap-x-2'>
        <>
        <div className='grid grid-cols-[1fr_1fr] gap-y-6'>
            <span className='text-center'>Binary</span>
            <span>Decimal</span>
            {nums.map((num, i) => (
                <Fragment key={i}>
                    <Binary className='odd:bg-gray-100 rounded-l-lg text-right'>{num}</Binary>
                    {/* <button>^</button>
                    <button>|</button>
                    <button>&</button> */}
                    <span className='even:bg-gray-100 rounded-r-lg'>=&emsp;{num}</span>
                </Fragment>
            ))}
        </div>
            <hr className='my-4 border-b w-full' />
            <div>=&emsp;<Binary className="font-bold" bitSize={10}>{total}</Binary> -&gt; {total}</div>
        </>
    )
}