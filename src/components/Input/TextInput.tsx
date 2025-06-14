"use client"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// interface TextInputProps {
//     label: string;
//     name: string;
//     id?: string;
//     type?: string;
//     placeholder?: string;
// }

// const TextInput: React.FC<TextInputProps> = ({
//     label,
//     name,
//     id,
//     type = 'text',
//     placeholder = '',
// }) => {
//     const [showPassword, setShowPassword] = useState(false);
//     const isPassword = type === 'password';

//     return (
//         <div className="flex flex-col gap-2 relative">
//             <label htmlFor={id || name} className="text-primary font-semibold">
//                 {label}
//             </label>
//             <input
//                 type={isPassword && showPassword ? 'text' : type}
//                 name={name}
//                 id={id || name}
//                 placeholder={placeholder}
//                 className="border px-4 py-3 w-full border-disable rounded-lg placeholder:text-disable placeholder:font-light text-sm pr-12"
//             />
//             {isPassword && (
//                 <button
//                     type="button"
//                     onClick={() => setShowPassword((prev) => !prev)}
//                     className="absolute right-4 bottom-3 text-disable"
//                 >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//             )}
//         </div>
//     );
// };

interface TextInputProps {
    label: string;
    name: string;
    id?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    id,
    type = 'text',
    placeholder = '',
    value,
    onChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
        <div className="flex flex-col gap-2 relative">
            <label htmlFor={id || name} className="text-primary font-semibold">
                {label}
            </label>
            <input
                type={isPassword && showPassword ? 'text' : type}
                name={name}
                id={id || name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border px-4 py-3 w-full border-disable rounded-lg placeholder:text-disable placeholder:font-light text-sm pr-12"
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 bottom-3 text-disable"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    );
};


export default TextInput;
