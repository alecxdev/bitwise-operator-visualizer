import { useState } from 'react';
import { Operator } from './operator'
import { Bitwise, BITWISE_OPERATORS } from '../models';
import { GetNumbers } from './get-numbers';

export const BitwiseCalculator = () => {
    const [operator, setOperator] = useState<Bitwise>(BITWISE_OPERATORS.OR);
    const [nums, setNums] = useState<number[]>();

    return (
        <div className='border p-4 min-w-[250px]'>
            <GetNumbers onChange={(nums) => {
                setNums(nums);
            }} />
            <div className="flex flex-col">
                <label className="text-left" htmlFor="operator">Operator</label>
                <select id="operator"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={operator} onChange={(e) => {
                    setOperator(e.target.value as Bitwise);
                }}>
                    {Object.entries(BITWISE_OPERATORS).map(([key, value]) => (
                        <option key={key} value={value}>{value.toUpperCase()}</option>
                    ))}
                </select>
            </div>
            {nums?.length ? <Operator nums={nums} operator={operator} /> : <div>Please add numbers</div>}
        </div>
    );
}