import React from 'react';

export default function ErrorPage() {
    return (
        <main className="error-container">
            <div className="error-content">
                <h1 className="error-heading">404 - Page Not Found</h1>
                <p className="error-message">Sorry, the page you are looking for does not exist.</p>
            </div>
        </main>
    );
}