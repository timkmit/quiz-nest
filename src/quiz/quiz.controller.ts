import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateQuizAnswerDto } from './DTO/create-quiz.dto';
import { QuizResponseDto } from './DTO/quiz-response.dto';
import { QuizResultDto } from './DTO/quiz-result.dto';

@ApiTags('Quizzes')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @ApiOperation({ summary: 'Получить квиз по ID' })
  @ApiParam({ name: 'id', description: 'ID квиза' })
  @ApiResponse({
    status: 200,
    description: 'Успешно возвращает вопросы квиза',
    type: QuizResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Квиз не найден' })
  @Get(':id')
  getQuiz(@Param('id') id: string): QuizResponseDto {
    const quizId = parseInt(id, 10);
    return this.quizService.getQuizById(quizId);
  }

  @ApiOperation({ summary: 'Отправить ответы на квиз' })
  @ApiParam({ name: 'id', description: 'ID квиза' })
  @ApiBody({
    description: 'Массив ответов на вопросы квиза',
    type: CreateQuizAnswerDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Возвращает результат проверки ответов',
    type: QuizResultDto,
  })
  @ApiResponse({ status: 404, description: 'Квиз не найден' })
  @Post(':id/submit')
  submitQuiz(
    @Param('id') id: string,
    @Body() data: CreateQuizAnswerDto,
  ): QuizResultDto {
    const quizId = parseInt(id, 10);
    return this.quizService.checkQuizAnswers(quizId, data.answers);
  }
}