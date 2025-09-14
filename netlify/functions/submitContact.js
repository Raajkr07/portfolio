const { Client } = require('pg');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const {
    name,
    email,
    interest,
    freelanceType,
    message,
  } = JSON.parse(event.body);

  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    await client.query(
      `INSERT INTO messages (name, email, interest, "freelanceType", message)
      VALUES ($1, $2, $3, $4, $5)`,
      [name, email, interest, freelanceType, message]
    );
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message saved!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
