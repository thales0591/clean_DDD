import { AnswerQuestionUseCase } from './answer-question'
import { Answer } from '@/domain/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

it('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'answer content',
  })

  expect(answer.content).toEqual('answer content')
})
