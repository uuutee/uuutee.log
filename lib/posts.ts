import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(fileName => fileName.endsWith('.md'))
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; tags: string[] }),
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}

// 年別アーカイブ表示用
// [{ id: '2017', text: '2017', count: 22 }...]
export const getAllYears = () => {
  const allDates = getSortedPostsData().map(v => v.date)
  return allDates
    .map(v => v.split('-')[0])
    .filter((e, i, a) => a.indexOf(e) === i) // [2005, 2006, 2007, ... 2016]
    .map(year => {
      return {
        id: year,
        text: year,
        count: allDates.filter(v => v.match(new RegExp(`^${year}`))).length,
      }
    })
}

// タグアーカイブ表示用
export const getAllTags = () => {
  const allTags = getSortedPostsData().map(v => v.tags)
  return allTags
    .flat()
    .filter((e, i, a) => a.indexOf(e) === i)
    .sort((a, b) => {
      a = a.toLowerCase()
      b = b.toLowerCase()
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })
    .map(tag => {
      return {
        id: tag.toLowerCase(),
        text: tag,
        count: allTags.filter(v => v.indexOf(tag) > -1).length,
      }
    })
}
