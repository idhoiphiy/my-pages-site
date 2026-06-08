export async function onRequest(context) {
  const country = context.request.headers.get("CF-IPCountry");

  const blockedCountries = ["BD", "IN", "PK"];

  if (blockedCountries.includes(country)) {
    return new Response(
      "<h1>Access Denied</h1><p>Website ini tidak tersedia di negara Anda.</p>",
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
