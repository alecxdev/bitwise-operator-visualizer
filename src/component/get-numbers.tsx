import { useCallback, useRef, useState } from 'react';

export const GetNumbers = ({ onChange }: { onChange: (nums: number[]) => void }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [nums, setNums] = useState<number[]>([]);

    const handleChange = useCallback((nums_: number[]) => {
        setNums(nums_);
        onChange(nums_);
    }, [onChange]);

    return (
        <>
        <input ref={inputRef} type="number" placeholder='Add number' className="bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        <button onClick={() => {
            const value = inputRef.current?.value;
            if (value !== undefined && !Number.isNaN(value)) {
                handleChange([...nums, Number(value)]);
            }
        }} className='w-full bg-blue-500 text-white mb-1 border-none'>Add</button>
        <button className='w-full' onClick={() => {
            handleChange([]);
        }}>Reset</button>
        </>
    );
};
