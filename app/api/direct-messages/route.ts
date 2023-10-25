import { NextResponse } from "next/server";
import { DirectMessage } from "@prisma/client";


import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const MESSAGE_BATCH_SIZE = 10;
export async function GET(req: Request) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);

    const cursor = searchParams.get("cursor");
    const conversationId = searchParams.get("conversationId");

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!conversationId) {
      return new NextResponse("No Convo ID Found", { status: 400 });
    }

    let messages: DirectMessage[] = [];

    if (cursor) {
      messages = await db.directMessage.findMany({
        take: MESSAGE_BATCH_SIZE,
        skip: 1,
        cursor: {
          id: cursor
        },
        where: {
          conversationId,
        },
        include: {
          member: {
            include: {
              profile: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      messages = await db.directMessage.findMany({
        take: MESSAGE_BATCH_SIZE,
        where: {
          conversationId,
        },
        include: {
          member: {
            include: {
              profile: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    let nextCursor = null;

    if (messages.length === MESSAGE_BATCH_SIZE) {
      nextCursor = messages[MESSAGE_BATCH_SIZE - 1].id;
    }
    return NextResponse.json({ items: messages, nextCursor });
  } catch (errr) {
    console.log("DIRECT_GET_MESSAGES", errr);
    return new NextResponse("Internal error", { status: 500 });
  }
}
