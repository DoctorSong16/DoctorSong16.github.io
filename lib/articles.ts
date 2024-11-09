import type { ArticleItem } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const articleDirectory = "./articles";

// Returns a list of all articles sorted by date.
// Files are in .md format.
export async function getAllArticles(): Promise<ArticleItem[]> {
    // Get all file names in the articles directory.
    const articleFileNames = fs.readdirSync(articleDirectory);
   
    // For each article, extract the metadata.
    const articleData = articleFileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(articleDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title,
            category: matterResult.data.category,
            date: matterResult.data.date,
        };
    });

    // Sort articles by date.
    return articleData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}