async function handleRSVP(e) {
    e.preventDefault();
    
    const formEl = e.target;
    const formData = new FormData(formEl);

    try {
        const response = await fetch('https://formspree.io/f/mpqvvdar', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const result = await response.json();

        if (response.ok) {
            formEl.reset();
            document.getElementById('rsvp-success').classList.remove('hidden');
        } else {
            console.error('Formspree error:', result);
            alert('حدث خطأ أثناء إرسال البيانات، يرجى المحاولة لاحقاً.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('فشل الاتصال بالخادم.');
    }
}
