// Dependencies
import slug from 'slug'

// Utils
import { isDefined, isString } from '../is'

interface iAdd {
  if: (condition: boolean) => string
}

interface iProps {
  ccn: string
  data: string[]
}

export function buildUrl(params: string[]): string {
  return params.filter(v => v).join('/')
}

export function slugFn(str = ''): string {
  return slug(str, { lower: true })
}

export function cx(...classes: string[]): string {
  return classes.join(' ').trim()
}

export function isFirstRender(items: any[] | any): boolean {
  return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0
}

export function waitFor(time: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, time * 1000))
}

export function add(cssRule: string | any): iAdd {
  return {
    if: (condition: boolean) => {
      if (condition && cssRule) {
        if (isString(cssRule)) {
          return cssRule
        }

        let cssString = ''

        Object.keys(cssRule).forEach((property: string) => {
          cssString += `${property}: ${cssRule[property]};`
        })

        return cssString
      }

      return ''
    }
  }
}

export function cxGenerator({ ccn, data }: iProps): string {
  const classList = [ccn]

  data.forEach(key => {
    if (key !== '') {
      classList.push(`${ccn}-${key}`)
    }
  })

  return classList.join(' ')
}
