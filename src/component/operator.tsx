import { Fragment, useMemo } from 'react';
import { Binary } from './binary';
import { Bitwise } from '../models';

export const Operator = ({ nums, operator }: { nums: number[]; operator: Bitwise }) => {

    const total = useMemo(() => {
        switch(operator) {
            case 'xor':
                return nums.reduce((prev, curr) => prev^curr);
            case 'and':
                return nums.reduce((prev, curr) => prev & curr);
            case 'or':
                return nums.reduce((prev, curr) => prev | curr);
        }

        throw new Error('Bitwise unknown');
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