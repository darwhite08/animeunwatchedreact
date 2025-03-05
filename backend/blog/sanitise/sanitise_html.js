import sanitize from "sanitize-html";

async function CleanTinymiceData(tinymceData) {
    const cleanHtml = sanitize(tinymceData, {
        allowedTags: sanitize.defaults.allowedTags.concat([
            'span', 'div', 'p', 'b', 'i', 'u', 'strong', 'em', 'blockquote', 
            'pre', 'code', 'strike', 'sub', 'sup', 'mark', 'table', 'thead', 'tbody', 'tr', 'td', 'th',
            'ul', 'ol', 'li', 'hr', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'a', 'img', 'video', 'source'
        ]),
    
        allowedAttributes: {
            'a': ['href', 'title', 'target'],  // Links
            'img': ['class', 'alt', 'width', 'height','src'], // Images
            'span': ['class'],
            'div': ['class'],
            'p': ['class'],
            'h1': ['class'],
            'h2': ['class'],
            'h3': ['class'],
            'h4': ['class'],
            'h5': ['class'],
            'h6': ['class'],
            'blockquote': ['class'],
            'table': ['border', 'cellpadding', 'cellspacing','class'],
            'th': ['class'],
            'td': ['class'],
            'tr': ['class'],
            'ul': ['class'],
            'ol': ['class'],
            'li': ['class'],
            'code': ['class'],
            'video': ['controls', 'autoplay', 'loop', 'muted', 'poster', 'width', 'height','class'],
            'source': ['src', 'type','class']
        },
    
       
    });
    return (cleanHtml)
}


export { CleanTinymiceData };