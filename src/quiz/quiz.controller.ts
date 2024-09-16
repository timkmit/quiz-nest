import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
  
    @Get(':id')
    getQuiz(@Param('id') id: string) {
      const quizId = parseInt(id, 10);
      return this.quizService.getQuizById(quizId);
    }
  
    @Post(':id/submit')
    submitQuiz(@Param('id') id: string, @Body() data: { answers: string[] }) {
      const quizId = parseInt(id, 10);
      return this.quizService.checkQuizAnswers(quizId, data.answers);
    }
}
