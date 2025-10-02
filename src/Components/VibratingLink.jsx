import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VibratingLink = ({ children, className = '', ...props }) => {
    const [isVibrating, setIsVibrating] = useState(false);

    useEffect(() => {
        if (isVibrating) {
            const timer = setTimeout(() => setIsVibrating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVibrating]);

    return (
        <Link
            {...props}
            className={`${className} ${isVibrating ? 'vibrate' : ''}`}
            onClick={() => setIsVibrating(true)}
        >
            {children}
        </Link>
    );
};

export default VibratingLink;
