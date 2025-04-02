import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommmentsRepository {
  create(answerComment: AnswerComment): Promise<void>
  delete(answerComment: AnswerComment): Promise<void>
  findById(id: string): Promise<AnswerComment | null>
}
