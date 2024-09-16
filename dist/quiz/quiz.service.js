"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const questions_1 = require("../data/questions");
let QuizService = class QuizService {
    getQuizById(quizId) {
        const quiz = questions_1.quizzes.find((q) => q.id === quizId);
        if (!quiz) {
            throw new common_1.NotFoundException('Quiz not found');
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
    checkQuizAnswers(quizId, answers) {
        const quiz = questions_1.quizzes.find((q) => q.id === quizId);
        if (!quiz) {
            throw new common_1.NotFoundException('Quiz not found');
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
};
exports.QuizService = QuizService;
exports.QuizService = QuizService = __decorate([
    (0, common_1.Injectable)()
], QuizService);
//# sourceMappingURL=quiz.service.js.map