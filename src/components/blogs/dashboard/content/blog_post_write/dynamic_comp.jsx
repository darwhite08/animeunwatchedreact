import React from "react";
import parse from "html-react-parser";

/**
 * Converts cleaned JSX string into a renderable React component.
 * @param {string} jsxString - The already sanitized JSX received from API.
 * @returns {JSX.Element} - A dynamically rendered component.
 */
const DynamicComponent = ({ jsxString }) => {
    if (!jsxString) return null;

    try {
        return <div>{parse(jsxString)}</div>; // ✅ Directly parse cleaned JSX
    } catch (error) {
        console.error("Error rendering JSX:", error);
        return <p className="text-red-500">Error rendering content</p>;
    }
};

export default DynamicComponent;
