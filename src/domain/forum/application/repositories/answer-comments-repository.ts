import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommmentsRepository {
  create(answerComment: AnswerComment): Promise<void>
}
