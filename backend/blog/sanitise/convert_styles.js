import * as cheerio from "cheerio";
import * as csstree from "css-tree";

// 🔥 Extended Tailwind Mapping
const tailwindMapping = {
    "text-align": {
        "center": "text-center",
        "left": "text-left",
        "right": "text-right",
        "justify": "text-justify"
    },
    "font-weight": {
        "bold": "font-bold",
        "lighter": "font-light",
        "bolder": "font-extrabold",
        "normal": "font-normal"
    },
    "text-decoration": {
        "underline": "underline",
        "line-through": "line-through",
        "overline": "overline"
    },
    "color": {
        "#2dc26b": "text-green-500",
        "red": "text-red-500",
        "blue": "text-blue-500",
        "black": "text-black",
        "gray": "text-gray-500"
    },
    "background-color": {
        "#2dc26b": "bg-green-500",
        "yellow": "bg-yellow-500",
        "blue": "bg-blue-500",
        "gray": "bg-gray-500"
    },
    "font-size": {
        "8pt": "text-xs",
        "10pt": "text-sm",
        "12pt": "text-md",
        "14pt": "text-lg",
        "24pt": "text-xl",
        "36pt": "text-6xl",

    },
    "border": {
        "1px solid black": "border border-black",
        "1px solid gray": "border border-gray-300"
    }
};

// 🟢 Convert Hex Color to Nearest Tailwind Color
const getTailwindColor = (property, value) => {
    if (tailwindMapping[property] && tailwindMapping[property][value]) {
        return tailwindMapping[property][value]; // Direct match
    }
    if (value.startsWith("#")) {
        return `${property === "color" ? "text" : "bg"}-[${value}]`; // Dynamic Tailwind Class
    }
    return "";
};

// 🔹 Convert CSS Styles to Tailwind
const convertStylesToTailwind = (styleString) => {
    let tailwindClasses = [];

    try {
        let ast = csstree.parse(`* { ${styleString} }`);
        csstree.walk(ast, (node) => {
            if (node.type === "Declaration") {
                const property = node.property;
                const value = csstree.generate(node.value).toLowerCase();

                let tailwindClass = getTailwindColor(property, value) || (tailwindMapping[property] ? tailwindMapping[property][value] : "");

                if (tailwindClass) {
                    tailwindClasses.push(tailwindClass);
                }
            }
        });
    } catch (error) {
        console.error("Failed to parse styles:", error);
    }

    return tailwindClasses.join(" ");
};

// 🔹 Convert Inline Styles to Tailwind (Including Quotes, Tables & Image Detection)
const processHtmlToTailwind = (html) => {
    const $ = cheerio.load(html, { decodeEntities: false });

    $("*").each((index, element) => {
        const style = $(element).attr("style");

        if (style) {
            const tailwindClass = convertStylesToTailwind(style);

            if (tailwindClass) {
                $(element).removeAttr("style"); // Remove inline styles
                $(element).addClass(tailwindClass); // Add Tailwind classes
            }
        }
    });

    // 🔥 Add Conditional Styling for Quotes
    $("blockquote").each((index, element) => {
        $(element).addClass("border-l-4 border-gray-500 pl-4 italic text-gray-700");
    });

    // 🔥 Add Conditional Styling for Tables
    $("table").each((index, element) => {
        $(element).addClass("border-collapse border border-gray-300 w-full text-left");
    });

    $("tr:nth-child(even)").each((index, element) => {
        $(element).addClass("bg-gray-100");
    });

    $("td, th").each((index, element) => {
        $(element).addClass("border border-gray-300 bg-white text-white px-4 py-2");
    }); 

    // 🔥 Detect <div> containing images and apply Tailwind styling
    $("div").each((index, element) => {
        if ($(element).find("img").length > 0) {
            // Check if multiple images exist in div
            const imgCount = $(element).find("img").length;

            if (imgCount > 1) {
                $(element).addClass("grid grid-cols-2 gap-4 p-4"); // Apply grid layout for multiple images
            } else {
                $(element).addClass("flex justify-center p-4"); // Center single image
            }
        }
    });

    return $("body").html(); // ✅ Return clean Tailwind HTML without <html><body> wrapper
};

// 🔥 Convert TinyMCE HTML to Tailwind
export const ConvertTinyMCEtoTailwind = (htmlContent) => {
    return processHtmlToTailwind(htmlContent);
};
