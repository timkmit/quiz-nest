import { Injectable, NotFoundException } from '@nestjs/common';
import { quizzes } from 'src/data/questions';

@Injectable()
export class QuizService {
    getQuizById(quizId: number) {
      const quiz = quizzes.find((q) => q.id === quizId);
      if (!quiz) {
        throw new NotFoundException('Quiz not found');
      }
      return {
        id: quiz.id,
        name: quiz.name,
        questions: quiz.questions.map((q) => ({
          question: q.question,
          options: q.options,
        })),
      };
    }
  
    checkQuizAnswers(quizId: number, answers: string[]): { score: number, total: number } {
      const quiz = quizzes.find((q) => q.id === quizId);
      if (!quiz) {
        throw new NotFoundException('Quiz not found');
      }
  
      let score = 0;
      for (let i = 0; i < quiz.questions.length; i++) {
        if (answers[i] === quiz.questions[i].answer) {
          score++;
        }
      }
      return {
        score,
        total: quiz.questions.length,
      };
    }
}
