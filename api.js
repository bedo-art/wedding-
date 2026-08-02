export default function handler(req, res) {
    // Enable basic CORS headers if needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const { name, whatsapp, attendance, guests } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, error: 'Name is required' });
        }

        if (!whatsapp) {
            return res.status(400).json({ success: false, error: 'WhatsApp number is required' });
        }

        // For demo purposes, log the RSVP data to the server logs.
        // In production, you can replace this with code to save data to MongoDB, Firebase, Supabase, or Google Sheets.
        console.log('--- New RSVP Submission ---');
        console.log(`Name: ${name}`);
        console.log(`WhatsApp: ${whatsapp}`);
        console.log(`Status: ${attendance}`);
        console.log(`Guests: ${guests}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);

        return res.status(200).json({
            success: true,
            message: 'RSVP saved successfully',
            data: { name, whatsapp, attendance, guests }
        });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
}
