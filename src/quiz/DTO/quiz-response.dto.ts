import { ApiProperty } from "@nestjs/swagger";

export class QuestionDto {
    @ApiProperty({ description: 'Текст вопроса', example: 'What is the capital of France?' })
    question: string;
  
    @ApiProperty({ description: 'Варианты ответа', example: ['Berlin', 'Madrid', 'Paris'] })
    options: string[];
  }
  
  export class QuizResponseDto {
    @ApiProperty({ description: 'ID квиза', example: 1 })
    id: number;
  
    @ApiProperty({ description: 'Название квиза', example: 'General Knowledge' })
    name: string;
  
    @ApiProperty({ type: [QuestionDto], description: 'Массив вопросов квиза' })
    questions: QuestionDto[];
  }