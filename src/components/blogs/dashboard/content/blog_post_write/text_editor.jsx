import { useEffect, useRef } from "react";

export default function TinymceEditor({ value, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tinymce_7.2.1/tinymce/js/tinymce/tinymce.min.js";
    script.onload = () => {
      if (window.tinymce) {
        window.tinymce.init({
          selector: "#editor",
          branding: false, // Removes "Powered by Tiny"
          menubar: false, // Hides the menubar
          skin: "oxide", // Ensures standard free version skin
          resize: false, // 🛑 Prevents editor resizing
          height: 400, // 📌 Set a fixed height to prevent resizing issues
          plugins:
            "anchor preview emoticons table accordion autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
          toolbar:
            "undo redo | styles fontsize | bold italic underline strikethrough blockquote forecolor backcolor| numlist bullist indent outdent table emoticons| align lineheight | link image media  |  charmap  removeformat  accordion  preview",
          setup: (editor) => {
            editorRef.current = editor;
            editor.on("input change keyup", () => {
              onChange(editor.getContent()); // Update parent state
            });
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.tinymce) {
        window.tinymce.remove("#editor");
      }
    };
  }, [onChange]);

  return <textarea  id="editor" defaultValue={value} />;
}
