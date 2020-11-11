import { buildUrl } from '../index'

describe('#buildUrl', () => {
  it('should generate a valid url', () => {
    expect(buildUrl(['dashboard', '123', 'master', 'schema', 'model', 'post'])).toBe(
      'dashboard/123/master/schema/model/post'
    )
  })
})
