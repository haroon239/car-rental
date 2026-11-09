import { prisma } from "@/lib/prisma";
import { ok, fail } from "@/lib/api-response";

export async function GET() {
  try {
    const cars = await prisma.car.count();
    return ok({ status: "up", cars });
  } catch {
    return fail("Database connection failed", 500);
  }
}