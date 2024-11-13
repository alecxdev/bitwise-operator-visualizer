import { useCallback, useEffect, useRef, useState } from 'react';

interface ChildrenProps {
    animation: string;
    startAnimation: (props?: { delay?: number }) => void;
}

interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
}

const ANIMATIONS_STATES = {
    START: 'start',
    END: 'end',
    NONE: 'none'
} as const;

type AnimationStates = typeof ANIMATIONS_STATES[keyof typeof ANIMATIONS_STATES];

export const Animation = ({ children }: Props) => {
    const [animate, setAnimate]= useState<AnimationStates>(ANIMATIONS_STATES.NONE);
    const timeoutRef = useRef<number>();

    useEffect(() => () => {
        clearTimeout(timeoutRef.current);
    }, []);

    const startAnimation = useCallback((props: Parameters<ChildrenProps['startAnimation']>[0]) => {
        setAnimate(ANIMATIONS_STATES.NONE);
        clearTimeout(timeoutRef.current);
        setTimeout(() => {
            setAnimate(ANIMATIONS_STATES.START);
            const delay = props?.delay ?? 0;

            timeoutRef.current = setTimeout(() => {
                setAnimate(ANIMATIONS_STATES.END);
            }, 1500 + delay);
        }, 0);
    }, []);

    return (
        children({
            animation: `${
                animate === ANIMATIONS_STATES.START  ? 'show show-start'
                : animate === ANIMATIONS_STATES.END ? 'show show-end'
                : ''
            }`,
            startAnimation
        })
    );
};
