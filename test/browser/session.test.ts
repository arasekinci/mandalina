import { session } from '../../src/browser'

describe('session', () => {
  beforeEach(() => {
    session.clear()
  })

  test('key', () => {
    session.set('name', 'John')
    session.set('surname', 'Doe')

    expect(session.key(0)).toBe('name')
    expect(session.key(1)).toBe('surname')
    expect(session.key(2)).toBe(undefined)
  })

  test('length', () => {
    session.set('name', 'John')
    session.set('surname', 'Doe')

    expect(session.length()).toBe(2)
  })

  test('get', () => {
    session.set('name', 'John')
    session.set('surname', 'Doe')

    expect(session.get<string>('name')).toBe('John')
    expect(session.get<string>('surname')).toBe('Doe')
    expect(session.get<string>('age')).toBe(undefined)
  })

  test('set', () => {
    session.set('name', 'John')
    session.set('surname', 'Doe')

    expect(session.get<string>('name')).toBe('John')
    expect(session.get<string>('surname')).toBe('Doe')
  })

  test('remove', () => {
    session.set('name', 'John')
    session.set('surname', 'Doe')

    session.remove('name')

    expect(session.length()).toBe(1)
    expect(session.get<string>('name')).toBe(undefined)
  })

  test('clear', () => {
    session.set('name', 'John')
    session.set('surname', 'Doe')

    session.clear()

    expect(session.length()).toBe(0)
    expect(session.get<string>('name')).toBe(undefined)
    expect(session.get<string>('surname')).toBe(undefined)
  })
})
