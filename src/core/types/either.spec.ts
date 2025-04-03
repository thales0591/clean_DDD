import { Either, left, rigth } from '../either'

function doSomething(shouldSuccess: boolean): Either<string, string> {
  if (shouldSuccess) return rigth('success')
  return left('error')
}

test('success result', () => {
  const result = doSomething(true)

  expect(result.isRigth()).toEqual(true)
  expect(result.isLeft()).toEqual(false)

})

test('error result', () => {
  const result = doSomething(false)

  expect(result.isLeft()).toEqual(true)
  expect(result.isRigth()).toEqual(false)
})
