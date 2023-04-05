export type Post = {
  id: number
  title: string
  date: string
  contentHtml?: string
}

export type Year = {
  id: string
  text: string
  count: number
}

export type Tag = {
  id: string
  text: string
  count: number
}
