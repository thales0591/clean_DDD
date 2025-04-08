import { Either, left, right } from '../either'

function doSomething(shouldSuccess: boolean): Either<string, string> {
  if (shouldSuccess) return right('success')
  return left('error')
}

test('success result', () => {
  const result = doSomething(true)

  expect(result.isRight()).toEqual(true)
  expect(result.isLeft()).toEqual(false)
})

test('error result', () => {
  const result = doSomething(false)

  expect(result.isLeft()).toEqual(true)
  expect(result.isRight()).toEqual(false)
})
