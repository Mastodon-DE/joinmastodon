import { usePostList } from "~/composables/server/Post";

export default defineEventHandler(async () => {
    const files = await usePostList();

    return files ?? [];
});
