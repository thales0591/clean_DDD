import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommmentsRepository {
  create(questionComment: QuestionComment): Promise<void>
}
