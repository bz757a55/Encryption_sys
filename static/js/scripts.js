document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const encryptForm = document.getElementById('encryptForm');
    const decryptForm = document.getElementById('decryptForm');

    encryptForm.addEventListener('submit', function(event) {
        const textArea = document.getElementById('encryptText');
        if (textArea.value.trim() === '') {
            event.preventDefault();
            alert('Please enter text to encrypt.');
        }
    });

    decryptForm.addEventListener('submit', function(event) {
        const textArea = document.getElementById('decryptText');
        if (textArea.value.trim() === '') {
            event.preventDefault();
            alert('Please enter text to decrypt.');
        }
    });

    // Optional: Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.previousElementSibling.textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert('Text copied to clipboard.');
            });
        });
    });

    // Optional: AJAX form submission for better user experience
    // (Requires server-side changes to return JSON responses)
    const ajaxSubmit = (form, url) => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').textContent = data.result;
                document.getElementById('action').textContent = data.action;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    };

    ajaxSubmit(encryptForm, '/encrypt');
    ajaxSubmit(decryptForm, '/decrypt');
});
