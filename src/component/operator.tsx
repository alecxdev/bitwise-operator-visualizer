import { Fragment, useMemo, useState } from 'react';
import { Binary } from './binary';
import { Bitwise, BITWISE_OPERATORS } from '../models';
import { andFn, orFn, xorFn } from '../services/bitwise';
import { Animation } from './animation';

export const Operator = ({ nums, operator }: { nums: number[]; operator: Bitwise }) => {    
    const [maxSize, setMaxSize] = useState(0);

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

        return nums.reduce((prev, curr) => {
            setMaxSize(v => v > curr.toString(2).length ? v : curr.toString(2).length);
            return fn(prev, curr);
        });
    }, [nums, operator]);


    return (
        // <div className='grid grid-cols-[1fr_repeat(3,min-content)_1fr] gap-y-6 gap-x-2'>
        <>
        <div className='grid grid-cols-[1fr_1fr] gap-y-6'>
            <span className='text-center'>Binary</span>
            <span>Decimal</span>
            <Animation>
                {(props) => (
                    <>
                    {nums.map((num, i) => (
                        <Fragment key={i}>
                            <Binary
                            className='odd:bg-gray-100 rounded-l-lg text-right'
                            extraBitProps={{
                                className: props.animation,
                                style: { animationDelay: `${i}000ms`}
                            }}
                            bitSize={maxSize}
                            >{num}</Binary>
                            {/* <button>^</button>
                            <button>|</button>
                            <button>&</button> */}
                            <span className='even:bg-gray-100 rounded-r-lg'>=&emsp;{num}</span>
                        </Fragment>
                    ))}
                    <span />
                    <button onClick={() => props.startAnimation({ delay: (nums.length - 1) * 1000 })}>start</button>
                    </>
                )}
            </Animation>
        </div>
            <hr className='my-4 border-b w-full' />
            <div>=&emsp;<Binary className="font-bold">{total}</Binary> -&gt; {total}</div>
        </>
    )
}