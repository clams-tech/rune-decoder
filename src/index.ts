import { Base64Binary } from './base64'
import { binaryHashToHex, invalidAscii, operatorToDescription, runeOperatorRegex } from './utils'
import type { DecodedRune } from './types'

export * from './types'

export const decode = (rune: string): DecodedRune | null => {
  const runeBinary = Base64Binary.decode(rune)
  const hashBinary = runeBinary.slice(0, 32)
  const hash = binaryHashToHex(hashBinary)
  const restBinary = runeBinary.slice(32)

  const [uniqueId, ...restrictionStrings] = new TextDecoder().decode(restBinary).split('&')

  const id = uniqueId.split('=')[1]

  // invalid rune checks
  if (!id) return null
  if (restrictionStrings.some(invalidAscii)) return null

  const restrictions = restrictionStrings.map((restriction) => {
    const alternatives = restriction.split('|')

    const summary = alternatives.reduce((str, alternative) => {
      const [operator] = alternative.match(runeOperatorRegex) || []
      if (!operator) return str

      const [name, value] = alternative.split(operator)

      return `${str ? `${str} OR ` : ''}${name} ${operatorToDescription(operator)} ${value}`
    }, '')

    return {
      alternatives,
      summary
    }
  })

  return {
    id,
    hash,
    restrictions
  }
}
