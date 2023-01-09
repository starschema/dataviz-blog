// a nextjs modal component 
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsClient, useOnClickOutside } from 'usehooks-ts';

interface Props {
    children: React.ReactNode;
    className?: string;
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    const childrenWrapperRef = useRef<HTMLDivElement>(null);
    const isClient = useIsClient();
    const { children, } = props;

    const modalRoot = document.getElementById('modal-root');

    useOnClickOutside(childrenWrapperRef, () => {
        props.onClose();
    });
    const modal = (
        <div className='fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-neutral-700/50 backdrop-filter backdrop-blur-sm '>
            <div ref={childrenWrapperRef} className='absolute max-h-screen h-full p-6'>
                {children}
            </div>
        </div>
    );

    return isClient ? createPortal(modal, modalRoot) : null;
};

export default Modal;