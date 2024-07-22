import 'server-only'
import { type NextRequest } from 'next/server';
import { GetAllProduct } from "@/_lib/Data"

export async function GET(request: NextRequest): Promise<products[] | []> {
  const params = request.nextUrl.searchParams;
  const page = params.get("page");
  if (page) {
    return await GetAllProduct(parseInt(page));
  }
  else {
    return []
  }
}