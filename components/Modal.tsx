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
    const { children, } = props;
    const isClient = useIsClient();
    useOnClickOutside(childrenWrapperRef, () => {
        props.onClose();
    });

    if (!isClient) return null;

    const modalRoot = document.getElementById('modal-root');
    const modal = (
        <div className='fixed top-0 left-0 w-screen h-screen px-10 overflow-auto z-50 bg-neutral-700/50 backdrop-filter backdrop-blur-sm '>
            <div className='absolute inline-block mx-auto'>
                <div ref={childrenWrapperRef} className='my-10'>
                    {children}
                </div>
            </div>
        </div>
    );

    return props.open ? createPortal(modal, modalRoot) : null;
};

export default Modal;