import React from 'react';

interface CertificationBadgeProps {
    label: string;
    color?: 'green' | 'blue' | 'yellow' | 'red' | 'gray';
    icon?: React.ReactNode;
    className?: string;
}

export function CertificationBadge({ label, color = 'gray', icon, className = '' }: CertificationBadgeProps) {
    const colorStyles = {
        green: 'bg-green-100 text-green-800 border-green-200',
        blue: 'bg-blue-100 text-blue-800 border-blue-200',
        yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        red: 'bg-red-100 text-red-800 border-red-200',
        gray: 'bg-gray-100 text-gray-800 border-gray-200',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${colorStyles[color]} ${className}`}
        >
            {icon && <span className="w-3.5 h-3.5">{icon}</span>}
            {label}
        </span>
    );
}
