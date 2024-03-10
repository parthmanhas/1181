'use client';

import { MouseEventHandler, ReactNode } from "react";

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>, children: ReactNode }) => {
    return (
        <>
            {isOpen && (
                <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        {children}
                        <button onClick={onClose} className="absolute top-0 right-0 m-4 p-2 rounded-full bg-gray-300 hover:bg-gray-400">&times;</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;