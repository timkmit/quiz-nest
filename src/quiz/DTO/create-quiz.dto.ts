import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizAnswerDto {
  @ApiProperty({
    description: 'Массив ответов пользователя',
    example: ['Paris', 'Shakespeare', '...'],
  })
  answers: string[];
}