import { useCallback, useEffect, useRef, useState } from 'react';

interface ChildrenProps {
    animation: string;
    startAnimation: (props?: { delay?: number }) => void;
}

interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
}
export const Animation = ({ children }: Props) => {
    const [animate, setAnimate] = useState(false);
    const timeoutRef = useRef<number>();

    useEffect(() => () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    const startAnimation = useCallback((props: Parameters<ChildrenProps['startAnimation']>[0]) => {
        setAnimate(true);
        const delay = props?.delay ?? 0;
        
        timeoutRef.current = setTimeout(() => {
            setAnimate(false);
        }, 1500 + delay);
    }, []);
    
    return (
        children({
            animation: `show ${animate ? 'show-start' : 'show-end'}`,
            startAnimation
        })
    );
}