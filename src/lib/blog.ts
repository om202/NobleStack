import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blogs');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    author?: {
        name: string;
        picture: string;
    };
    tags?: string[];
    publisher?: string;
    content: string;
    [key: string]: any;
}

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: BlogPost = {} as BlogPost;

    // Ensure only the minimal needed data is exposed
    items.slug = realSlug;
    items.content = content;

    // Apply all data from frontmatter
    Object.keys(data).forEach((key) => {
        items[key] = data[key];
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
