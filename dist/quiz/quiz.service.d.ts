export declare class QuizService {
    getQuizById(quizId: number): {
        id: number;
        name: string;
        questions: {
            question: string;
            options: string[];
        }[];
    };
    checkQuizAnswers(quizId: number, answers: string[]): {
        score: number;
        total: number;
    };
}
