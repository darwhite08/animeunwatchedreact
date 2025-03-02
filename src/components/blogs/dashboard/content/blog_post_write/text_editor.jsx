import { useEffect, useRef } from 'react';

export default function TinymceEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    // Load TinyMCE script dynamically
    const script = document.createElement('script');
    script.src = '/tinymce_7.2.1/tinymce/js/tinymce/tinymce.min.js';
    script.onload = () => {
      if (window.tinymce) {
        window.tinymce.init({
          selector: '#editor',
          branding: false,  // Removes "Powered by Tiny"
          menubar: false,  // Hides the menubar
          license_key: '', // Disables premium features (removes Upgrade button)
          skin: 'oxide',  // Ensures standard free version skin
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          setup: (editor) => {
            editorRef.current = editor;
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup when the component unmounts
      if (window.tinymce) {
        window.tinymce.remove('#editor');
      }
      document.body.removeChild(script);
    };
  }, []);

  return <textarea id="editor" defaultValue="Welcome to TinyMCE!" />;
}
