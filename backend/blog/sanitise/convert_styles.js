import * as cheerio from "cheerio";
import * as csstree from "css-tree";

// 🔥 Tailwind CSS Mappings (Extended for Colors & Backgrounds)
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
        "#2dc26b": "bg-green-500 px-2 py-1 rounded-lg",
        "yellow": "bg-yellow-500 px-2 py-1 rounded-lg",
        "blue": "bg-blue-500 px-2 py-1 rounded-lg",
        "gray": "bg-gray-500 px-2 py-1 rounded-lg"
    },
    "font-size": {
        "12px": "text-xs",
        "14px": "text-sm",
        "16px": "text-base",
        "18px": "text-lg",
        "20px": "text-xl"
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

// 🔹 Convert Inline Styles to Tailwind
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

    return $("body").html(); // ✅ Return clean Tailwind HTML without <html><body> wrapper
};

// 🔥 Convert TinyMCE HTML to Tailwind
export const ConvertTinyMCEtoTailwind = (htmlContent) => {
    return processHtmlToTailwind(htmlContent);
};
