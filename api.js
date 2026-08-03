async function handleRSVP(e, accessKey, successElementId) {
    e.preventDefault();
    
    const formEl = e.target;
    const formData = new FormData(formEl);
    
    // Inject the specific access key for this form box
    formData.set('access_key', accessKey);
    formData.append('subject', 'تأكيد حضور أو تهنئة جديدة من حفل الزفاف!');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            formEl.reset();
            const successEl = document.getElementById(successElementId);
            successEl.classList.remove('hidden');
            
            // Hide success text after 6 seconds
            setTimeout(() => {
                successEl.classList.add('hidden');
            }, 6000);
        } else {
            console.error('Submission error:', result);
            alert('حدث خطأ أثناء إرسال البيانات، يرجى المحاولة لاحقاً.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('فشل الاتصال بالخادم.');
    }
}
