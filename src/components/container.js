import React from 'react';
import Navbar from '../components/navbar';

export default function Container({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
