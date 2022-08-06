# Rune Decoder

A simple JavaScript libary for decoding [runes](https://github.com/rustyrussell/runes).

## Install

Install directly from the repo:

### Yarn

`yarn add https://github.com/clams-tech/rune-decoder`

### NPM

`npm i https://github.com/clams-tech/rune-decoder`

## Usage

Using the decode method you can get a similar result to that of passing a rune to the [Core Lightning Decode method](https://lightning.readthedocs.io/lightning-decode.7.html):

```javascript
import { decode } from 'decode-rune'

const rune =
  'aTEhoWOAllxYDgWSUyGPEKVeUwr-MG_Il1HXZis1MYs9NCZtZXRob2RebGlzdHxtZXRob2ReZ2V0fG1ldGhvZD1zdW1tYXJ5Jm1ldGhvZC9saXN0ZGF0YXN0b3Jl'

const decoded = decode(rune)

console.log(decoded)

// {
//   id: '4',
//   hash: '693121a16380965c580e059253218f10a55e530aff30ffc89751d7662b35318b',
//   restrictions: [
//     {
//       alternatives: ['method^list', 'method^get', 'method=summary'],
//       summary: 'method starts with list OR method starts with get OR method is equal to summary'
//     },
//     {
//       alternatives: ['method/listdatastore'],
//       summary: 'method is not equal to listdatastore'
//     }
//   ]
// }
```
