export async function POST(req: Request) {
  const body = await req.json();

  console.log("Email received:", body.email);

  return Response.json({ success: true });
}