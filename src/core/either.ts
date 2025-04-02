// Error
export class Left<L> {
  readonly reason: L

  constructor(reason: L) {
    this.reason = reason
  } 
}

// Success
export class Right<R> {
  readonly value: R

  constructor(value: R) { 
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: any): Either<L, R> => {
  return new Left(value)
}

export const rigth =  <L, R>(value:any): Either<L, R> => {
  return new Right(value)
}
