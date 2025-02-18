exports.handler = async function(event, context) {
    const { first_name, last_name, email } = JSON.parse(event.body);
    console.log('Received data:', { first_name, last_name, email });

    try {
        const response = await fetch('https://api.engagebay.com/v2/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.oivjchbsg4i5qb8hjoslnslaar}`
            },
            body: JSON.stringify({ first_name, last_name, email })
        });
        const data = await response.json();
        console.log('API response:', data);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
