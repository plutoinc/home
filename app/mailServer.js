import Axios from "axios";

export default async function handler(event, context) {
  if (!event.queryStringParameters || !event.queryStringParameters.email) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: "Invalid or No Email on Request" })
    };
  }

  const email = event.queryStringParameters.email;

  try {
    const param = {
      email_address: email,
      status: "subscribed"
    };

    const stringifiedParam = JSON.stringify(param);
    await Axios.post(
      "https://us16.api.mailchimp.com/3.0/lists/938e6d7f93/members",
      stringifiedParam,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        auth: {
          username: "plutoTylor",
          password: process.env.MAILCHIMP_API_KEY
        }
      }
    );
    return context.succeed({
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS"
      },
      body: JSON.stringify({ success: true })
    });
  } catch (err) {
    console.error(err);
    return context.done(null, {
      statusCode: err.response.data.status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS"
      },
      body: JSON.stringify({ error: err.response.data.title })
    });
  }
}
