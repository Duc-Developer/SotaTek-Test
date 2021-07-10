import { useRef, useEffect, useState } from 'react';

export const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

export const useDispatchEvent = (eventName, element = window) => {
    const event = new Event(eventName);
    const dispatchEvent = (ev) => element.dispatchEvent(ev);
    return [event, dispatchEvent];
};

export const useDebounce = (value, delay = 350) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};

const useHooks = {
    useEventListener,
    useDispatchEvent,
    useDebounce,
};

export default useHooks;
