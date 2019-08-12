import { required, IValues } from './Form'

describe('required', () => {
  test("When required called with title being an empty string, an error should be 'This must be populated'", () => {
    const values: IValues = {
      title: '',
    }
    const result = required('title', values)
    expect(result).toBe('This must be populated')
  })
})
