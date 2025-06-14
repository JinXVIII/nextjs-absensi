"use client";

import { AlertCircle } from 'lucide-react';
import React from 'react';

interface ErrorAlertProps {
    message: string;
    visible: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, visible }) => {
    if (!visible) return null;

    return (
        <div className="fixed top-6 right-6 z-50">
            <div className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 bg-white rounded-lg shadow-md animate-slide-in">
                <AlertCircle className="w-5 h-5" />
                <span>{message}</span>
            </div>
        </div>
    );
};

export default ErrorAlert;
