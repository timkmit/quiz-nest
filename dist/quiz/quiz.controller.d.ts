import { QuizService } from './quiz.service';
import { CreateQuizAnswerDto } from './DTO/create-quiz.dto';
import { QuizResponseDto } from './DTO/quiz-response.dto';
import { QuizResultDto } from './DTO/quiz-result.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    getQuiz(id: string): QuizResponseDto;
    submitQuiz(id: string, data: CreateQuizAnswerDto): QuizResultDto;
}
