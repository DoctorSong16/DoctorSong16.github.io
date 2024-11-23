import type { ArticleItem } from "@/app/types";
import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import path from "path";
// import { remark } from "remark";
// import html from "remark-html";

const articleDirectory = "./articles";

// Returns a list of all articles sorted by date.
// Files are in .md format.
export function getSortedArticles(): ArticleItem[] {
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
            summary: matterResult.data.summary,
            content: undefined,
        };
    });

    // Sort articles by date.
    return articleData.sort((a, b) => {
        const format = "DD-MM-YYYY";
        const dateA = moment(a.date, format);
        const dateB = moment(b.date, format);
        if (dateA.isBefore(dateB)) {
            return -1;
        } else {
            return 1;
        }
    });
}

// Returns a list of articles by category.
export function getArticlesByCategory(): Record<string, ArticleItem[]> {
    // Get all articles.
    const articles = getSortedArticles();
    // Create a dictionary to store articles by category.
    const articlesByCategory: Record<string, ArticleItem[]> = {};

    // For each article, add it to the corresponding category.
    articles.forEach((article) => {
        if (articlesByCategory[article.category]) {
            articlesByCategory[article.category].push(article);
        } else {
            articlesByCategory[article.category] = [article];
        }
    });

    return articlesByCategory;
}

// Returns the content of a specific article by slug/id.
export function getArticleData(id: string): ArticleItem {
    const fullPath = path.join(articleDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
        id,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: matterResult.data.date,
        summary: matterResult.data.summary,
        content: matterResult.content,
    };
}