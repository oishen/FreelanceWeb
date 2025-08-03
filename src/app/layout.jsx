"use client";

// RootLayout.jsx
import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

// Assuming you have defined the fonts in CSS using @import or link in index.html
export default function RootLayout({ children }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <html lang="en">
            <head>
                {/* You can include font links here if needed */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono&display=swap"
                    rel="stylesheet"
                />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body className="geist-sans geist-mono">{children}</body>
        </html>
    );
}
