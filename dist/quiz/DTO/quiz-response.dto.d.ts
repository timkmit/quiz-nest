export declare class QuestionDto {
    question: string;
    options: string[];
}
export declare class QuizResponseDto {
    id: number;
    name: string;
    questions: QuestionDto[];
}
