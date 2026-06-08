export async function onRequest(context) {

  const country = context.request.headers.get("CF-IPCountry");

  const blockedCountries = [
    "BD", // Bangladesh
    "IN", // India
    "PK"  // Pakistan
  ];

  if (blockedCountries.includes(country)) {
    return new Response(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Access Denied</title>
      </head>
      <body style="font-family:Arial;text-align:center;padding-top:100px;">
        <h1>Access Denied</h1>
        <p>Website ini tidak tersedia di negara Anda.</p>
      </body>
      </html>
      `,
      {
        status: 403,
        headers: {
          "Content-Type": "text/html"
        }
      }
    );
  }

  return context.next();
}