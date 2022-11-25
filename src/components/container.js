import React from 'react';
import Navbar from '../components/navbar';

export default function Container({ children }) {
    const [showTopBar, setShowTopBar] = React.useState(true);
    return (
        <div>
            <Navbar showTopBar={showTopBar} setShowTopBar={setShowTopBar} />
            {children}
        </div>
    );
}
