const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const { first_name, last_name, email } = JSON.parse(event.body);

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
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
