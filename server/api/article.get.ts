import { join } from "node:path";
import { usePost } from "~/composables/server/Post";

export default defineEventHandler(async (event) => {
    const url = new URL(
        event.node.req.url ?? "",
        `http://${event.node.req.headers.host}`,
    );

    // Get the path query parameter
    const filePath = decodeURIComponent(url.searchParams.get("path") ?? "");

    const post = usePost(filePath);

    if (!post)
        throw createError({
            statusCode: 404,
            message: "Post not found",
        });

    return post;
});
