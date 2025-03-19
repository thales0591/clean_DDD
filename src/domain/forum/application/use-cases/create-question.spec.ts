import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'
import { Question } from '../../enterprise/entities/question'

const fakeQuestionsRepository: QuestionsRepository = {
  // eslint-disable-next-line
  create: async (question: Question) => {},
}

it('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: 'id-01',
    title: 'New question',
    content: 'Question content',
  })

  expect(question.id).toBeTruthy()
})
