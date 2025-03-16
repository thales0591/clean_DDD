import { it, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

it('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({instructorId: '', questionId: '', content: 'answer content'})

  expect(answer.content).toEqual('answer content')
})