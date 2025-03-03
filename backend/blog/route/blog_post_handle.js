import express from 'express';
import { config } from 'dotenv';
import { ConvertTinyMCEtoTailwind } from '../sanitise/convert_styles.js';
import { CleanTinymiceData } from "../sanitise/sanitise_html.js"; // Fixed function name
import { convertHtmlToReact } from '../sanitise/html_to_react.js'; 
config();

const blogPostHandle = express.Router();

blogPostHandle.post('/api/blog/createpostfile', (req, res) => {
    console.log(req.body);
    res.json({ status: true });
});

blogPostHandle.post('/api/blog/editpostfile', (req, res) => {
    console.log(req.body);
    res.json({ status: true });
});

blogPostHandle.post('/api/blog/heading/save', (req, res) => {
    console.log(req.body);
    res.json({ status: true });
});

blogPostHandle.post('/api/blog/coverphoto/save', (req, res) => {
    console.log(req.body);
    res.json({ status: true });
});

blogPostHandle.post("/api/blog/blogcontent/save", async (req, res) => {
    try {
        if (!req.body || typeof req.body.content !== "string") {
            return res.status(400).json({ status: false, message: "Invalid request body. 'content' must be a string." });
        }
        // 🛡 First convert TinyMCE HTML
        const convertedHtml = ConvertTinyMCEtoTailwind(req.body.content);        
        // 🛡 second sanitize TinyMCE HTML
        const sanitizedHtml = await CleanTinymiceData(convertedHtml);
        // 🛡 third convert to jsx code 
        const htmlToJsx = convertHtmlToReact(sanitizedHtml)
        console.log(htmlToJsx)

        res.json({ status: true,data:htmlToJsx });
    } catch (error) {
        console.error("Processing Error:", error);
        res.status(500).json({ status: false, message: "Server error while processing content" });
    }
});

export default blogPostHandle;
