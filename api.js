export default async function handler(req, res) {
    // Enable basic CORS headers if needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { name, whatsapp, attendance, guests, message } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, error: 'Name is required' });
        }

        const accessKeys = [
            '9918f5df-b5e9-4eee-82a6-36f0061bf600',
            'cb20dfda-4809-480f-87f4-3709f396c5b3'
        ];

        try {
            // Forward the submission to Web3Forms for both access keys concurrently
            const promises = accessKeys.map(key => {
                return fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: key,
                        subject: 'تأكيد حضور وتهنئة زفاف جديدة!',
                        name,
                        whatsapp: whatsapp || 'غير متوفر',
                        attendance: attendance || 'غير متوفر',
                        guests: guests || 'غير متوفر',
                        message: message || ''
                    })
                });
            });

            const responses = await Promise.all(promises);
            const results = await Promise.all(responses.map(r => r.json()));
            const allSuccessful = results.every(result => result.success);

            // Log details locally for debugging/backup
            console.log('--- New RSVP Submission Processed ---');
            console.log(`Name: ${name}`);
            console.log(`WhatsApp: ${whatsapp}`);
            console.log(`Status: ${attendance}`);
            console.log(`Guests: ${guests}`);
            console.log(`Timestamp: ${new Date().toISOString()}`);

            if (allSuccessful) {
                return res.status(200).json({
                    success: true,
                    message: 'RSVP saved and sent to all destinations successfully',
                    data: { name, whatsapp, attendance, guests }
                });
            } else {
                return res.status(500).json({
                    success: false,
                    error: 'Failed to submit to one or more Web3Forms destinations'
                });
            }
        } catch (error) {
            console.error('Error forwarding to Web3Forms:', error);
            return res.status(500).json({ success: false, error: 'Server error processing request' });
        }
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
}
