export type Post = {
  id: string
  title: string
  date: string
  contentHtml?: string
  tags?: Array<string>
}

export type Year = {
  id: string
  text: string
  count: number
  path: string
}

export type Tag = {
  id: string
  text: string
  count: number
  path: string
}
