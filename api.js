async function handleRSVP(e) {
    e.preventDefault();
    
    const formEl = e.target;
    const accessKeys = [
        { label: 'Old Key', key: '9918f5df-b5e9-4eee-82a6-36f0061bf600' }, 
        { label: 'New Key', key: 'cb20dfda-4809-480f-87f4-3709f396c5b3' }
    ];

    try {
        // Send requests one after another to avoid spam/rate-limit blocks
        for (const item of accessKeys) {
            const formData = new FormData(formEl);
            formData.set('access_key', item.key);
            formData.append('subject', 'تأكيد حضور وتهنئة زفاف جديدة!');
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log(`Result for ${item.label}:`, result);

            if (!result.success) {
                console.warn(`Web3Forms failed for ${item.label}:`, result.message);
            }
        }

        // Reset form and show success message once processed
        formEl.reset();
        document.getElementById('rsvp-success').classList.remove('hidden');

    } catch (error) {
        console.error('Error submitting form:', error);
        alert('فشل الاتصال بالخادم.');
    }
}
