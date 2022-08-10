function i2hex(i: number) {
  return ('0' + i.toString(16)).slice(-2)
}

export const binaryHashToHex = (hash: Uint8Array): string => {
  return hash.reduce(function (memo, i) {
    return memo + i2hex(i)
  }, '')
}

export const runeOperatorRegex = /[=^$/~<>{}#!]/g

export const operatorToDescription = (operator: string): string => {
  switch (operator) {
    case '=':
      return 'is equal to'
    case '^':
      return 'starts with'
    case '$':
      return 'ends with'
    case '/':
      return 'is not equal to'
    case '~':
      return 'contains'
    case '<':
      return 'is less than'
    case '>':
      return 'is greater than'
    case '{':
      return 'sorts before'
    case '}':
      return 'sorts after'
    case '#':
      return 'comment'
    case '!':
      return 'is missing'
    default:
      return ''
  }
}

export const invalidAscii = (str: string): boolean =>
  !![...str].some((char) => char.charCodeAt(0) > 127)
