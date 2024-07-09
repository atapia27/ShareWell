import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to ShareWell!</h1>
            <p>Please check out our Red, Blue, and Green pages:</p>
            <ul>
                <li><a href="/red">Red Page</a></li>
                <li><a href="/blue">Blue Page</a></li>
                <li><a href="/green">Green Page</a></li>
            </ul>
        </div>
    );
};

export default LandingPage;