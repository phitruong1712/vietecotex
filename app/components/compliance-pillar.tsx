import React from 'react';
import { CertificationBadge } from './certification-badge';

interface PillarCardProps {
    title: string;
    icon: React.ReactNode;
    badges: readonly { label: string; color: 'green' | 'blue' | 'yellow' | 'red' | 'gray'; icon?: React.ReactNode }[];
    caption: string;
    className?: string;
}

export function PillarCard({ title, icon, badges, caption, className = '' }: PillarCardProps) {
    return (
        <div className={`bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow ${className}`}>
            <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-700 mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {badges.map((badge, index) => (
                    <CertificationBadge key={index} {...badge} />
                ))}
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
                {caption}
            </p>
        </div>
    );
}
