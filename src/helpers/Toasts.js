import React from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';

export const ToastMainContainer = () => <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar
    closeOnClick
    pauseOnHover
    draggable
    transition={Zoom}
/>

export const toaster = (message, type) => {
    if (type === 'success') {
        return toast.success(message);
    } if (type === 'info') {
        return toast.info(message);
    } if (type === 'warn') {
        return toast.warn(message);
    } if (type === 'error') {
        return toast.error(message);
    }
}

export default toaster;
