import { NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(_request: NextRequest) {
  return NextResponse.json({ status: "ok" }, { status: 200 })
}
