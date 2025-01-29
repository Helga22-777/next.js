// export function GET () {
//   return Response.json({greet: 'Hello routing'})
// }
// export function GET (_, { params }: any) {
//   const userId = params.userId
//   return Response.json(null)

// import { NextRequest } from "next/server"
// import { cookies } from "next/headers";
//query params
// }
// export async function GET (req: NextRequest) {
//   const search = req.nextUrl.searchParams;
//   const lang = search.get('lang');
//   return Response.json({})
// }
// export async function GET (req: NextRequest) {
//   const body = await req.json();
//   const { userName } = body;
//   return Response.json({greetings: `hello , ${userName}`})
// }
//cookies and headers
// export async function GET (req: NextRequest) {
//   const auth = cookies().get('auth')
//   const userAgent = req.headers.get('user-agent') // only for Vercel
// }
// export async function GET (_, {params}) {
//   const userId = params.userId
// }
// export async function GET(req: NextRequest) {
//   const search = req.nextUrl.searchParams
//   const lang = search.get('lang');
// }
//answer on request
// export async function GET() {
//   const headers = {hell: 'hell'}
//   return Response.json({null, {status: 400, { headers } } })
// }
// export async function GET() {
//     return Response.redirect('https://ggo.u.com')
// }