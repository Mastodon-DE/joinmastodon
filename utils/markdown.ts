import markdownItTaskLists from "@hackmd/markdown-it-task-lists";
import { fromHighlighter } from "@shikijs/markdown-it/core";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItContainer from "markdown-it-container";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import { createHighlighterCore } from "shiki/core";

const highlighter = createHighlighterCore({
    themes: [import("shiki/themes/rose-pine.mjs")],
    langs: [
        import("shiki/langs/javascript.mjs"),
        import("shiki/langs/typescript.mjs"),
        import("shiki/langs/python.mjs"),
        import("shiki/langs/toml.mjs"),
        import("shiki/langs/rust.mjs"),
        import("shiki/langs/sql.mjs"),
        import("shiki/langs/json.mjs"),
        import("shiki/langs/html.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/scss.mjs"),
        import("shiki/langs/bash.mjs"),
        import("shiki/langs/shell.mjs"),
        import("shiki/langs/yaml.mjs"),
        import("shiki/langs/markdown.mjs"),
    ],
    loadWasm: import("shiki/wasm"),
});

export const getMarkdownRenderer = async () => {
    const renderer = MarkdownIt({
        html: true,
        linkify: true,
    });

    const otherRenderer = MarkdownIt({
        html: true,
        linkify: true,
    });

    for (const ren of [renderer, otherRenderer]) {
        ren.use(
            // @ts-ignore
            fromHighlighter(await highlighter, {
                theme: "rose-pine",
            }),
        );

        ren.use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.ariaHidden({
                symbol: "",
                placement: "before",
            }),
        });

        ren.use(markdownItTocDoneRight, {
            containerClass: "toc",
            level: [1, 2, 3, 4],
            listType: "ul",
            listClass: "toc-list",
            itemClass: "toc-item",
            linkClass: "toc-link",
        });

        ren.use(markdownItTaskLists);

        ren.use(markdownItContainer, "spoiler");
    }

    renderer.use((md) => {
        md.renderer.rules.html_block = (tokens, idx) => {
            // Modify figure tags
            if (tokens[idx].content.startsWith("<figure")) {
                const imageUrl = (tokens[idx].content.match(
                    /src="([^"]+)"/,
                ) ?? [null, null])[1];

                if (!imageUrl) {
                    return otherRenderer.render(tokens[idx].content);
                }

                // Delete the first / if it exists
                const newUrl = `/_ipx/w_800&f_webp/${imageUrl.replace(
                    /^\//,
                    "",
                )}`;

                return tokens[idx].content.replace(imageUrl, newUrl);
            }
            return otherRenderer.render(tokens[idx].content);
        };

        md.renderer.rules.image = (tokens, idx, options, env, self) => {
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const output = otherRenderer.renderer.rules.image!(
                tokens,
                idx,
                options,
                env,
                self,
            );

            const imageUrl = (output.match(/src="([^"]+)"/) ?? [null, null])[1];

            if (!imageUrl) {
                return output;
            }

            const newUrl = `/_ipx/w_800&f_webp/${imageUrl.replace(/^\//, "")}`;

            return output.replace(imageUrl, newUrl);
        };
    });

    return renderer;
};

// Extract the FrontMatter header from raw markdown
export const parseFrontMatter = <T>(frontMatter: string): T | null => {
    const regex = /---\n([\s\S]+?)\n---/;
    const match = frontMatter.match(regex);
    if (!match) return null;
    const [, frontMatterString] = match;
    const frontMatterObject = frontMatterString
        .split("\n")
        .map((line) => line.split(": "))
        .reduce(
            (acc, [key, value]) => {
                acc[key] = value;
                return acc;
            },
            {} as Record<string, string>,
        );
    return frontMatterObject as T;
};

export const stripFrontMatter = (markdown: string) => {
    // Also strip the --- --- around the front matter
    return markdown.replace(/---\n([\s\S]+?)\n---/, "");
};
