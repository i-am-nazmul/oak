import { NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(`${BACKEND_URL}/api/creators`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => null);

    return NextResponse.json(
      data || { message: "Server response" },
      { status: response.status }
    );
  } catch (error) {
    console.error("API proxy error (/api/creators):", error);
    return NextResponse.json(
      { message: "Unable to connect to backend server. Please try again." },
      { status: 502 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/creators`);
    const data = await response.json().catch(() => null);

    return NextResponse.json(data || [], { status: response.status });
  } catch (error) {
    console.error("API proxy error GET (/api/creators):", error);
    return NextResponse.json(
      { message: "Unable to fetch creators." },
      { status: 502 }
    );
  }
}
