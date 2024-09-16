import { ApiProperty } from '@nestjs/swagger';

export class QuizResultDto {
  @ApiProperty({ description: 'Количество правильных ответов', example: 8 })
  score: number;

  @ApiProperty({ description: 'Общее количество вопросов', example: 10 })
  total: number;
}