import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = handleAuth();