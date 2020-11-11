// Dependencies
import slug from 'slug'

// Utils
import { isDefined, isString } from '../is'

export function buildUrl(params: any[]): any {
  return params.filter(v => v).join('/')
}

export function slugFn(str = ''): string {
  return slug(str, { lower: true })
}

export function cx(...classes: string[]): string {
  return classes.join(' ').trim()
}

export function isFirstRender(items: any): boolean {
  return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0
}

export function waitFor(time: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, time * 1000))
}

export function add(cssRule: any): any {
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
