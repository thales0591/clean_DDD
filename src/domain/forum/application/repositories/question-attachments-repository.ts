import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface QuestionAttachmentsRepository {
  findManyByAnswerId(questionId: string): Promise<AnswerComment[]>
}
