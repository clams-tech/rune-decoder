export type Restriction = {
  alternatives: string[]
  summary: string
}

export type DecodedRune = {
  id: string
  hash: string
  restrictions: Restriction[]
}
