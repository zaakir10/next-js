export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      username: string;
    };
  }
) {
  return Response.json({
    username: params.username,
  });
}