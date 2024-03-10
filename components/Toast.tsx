import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration = 3000 }: { message: string, duration?: number }) => {
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <>
            {showToast && (
                <div className="fixed bottom-0 left-[50%] translate-x-[-50%] mb-5 block bg-gray-800 text-white p-4 rounded-md">
                    <p>{message}</p>
                </div>
            )}
        </>
    );
};

export default Toast;
