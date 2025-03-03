import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import parse from "html-react-parser"; // ✅ Use modern parser

/**
 * Converts sanitized HTML into a React-compatible JSX string.
 * @param {string} sanitizedHtml - The cleaned and safe HTML content.
 * @returns {string} - JSX formatted React component.
 */
export const convertHtmlToReact = (sanitizedHtml) => {
    if (!sanitizedHtml || typeof sanitizedHtml !== "string") {
        console.error("Invalid input: Expected a string but received", typeof sanitizedHtml);
        return `export default function BlogComponent() { return (<p className="text-red-500">Invalid HTML content</p>); }`;
    }

    try {
        // 🛡 Sanitize HTML
        const window = new JSDOM("").window;
        const purify = DOMPurify(window);
        let cleanHtml = purify.sanitize(sanitizedHtml);

        // ✅ Replace `class` with `className` for JSX compatibility
        cleanHtml = cleanHtml.replace(/class=/g, "className=");

        // ✅ Generate JSX dynamically
        return (cleanHtml);
    } catch (error) {
        console.error("Error converting HTML to JSX:", error);
        return `export default function BlogComponent() { return (<p className="text-red-500">Error processing content</p>); }`;
    }
};
