import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";


export default async function create(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body
    const session = await getSession({ req })

    if (!session) {
        res.status(401).send("Please login to create a post");
        return;
    }

    const user = await prisma.user.findMany({
        where: {
            email: session.user?.email || undefined
        }
    })

    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: {
                connect: {
                    id: user.id,
                },
            },
        }
    });

    console.log(post)

    res.status(200).json({"post": "created"});
    }
