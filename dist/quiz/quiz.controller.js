"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const quiz_service_1 = require("./quiz.service");
const swagger_1 = require("@nestjs/swagger");
const create_quiz_dto_1 = require("./DTO/create-quiz.dto");
const quiz_response_dto_1 = require("./DTO/quiz-response.dto");
const quiz_result_dto_1 = require("./DTO/quiz-result.dto");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    getQuiz(id) {
        const quizId = parseInt(id, 10);
        return this.quizService.getQuizById(quizId);
    }
    submitQuiz(id, data) {
        const quizId = parseInt(id, 10);
        return this.quizService.checkQuizAnswers(quizId, data.answers);
    }
};
exports.QuizController = QuizController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить квиз по ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID квиза' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Успешно возвращает вопросы квиза',
        type: quiz_response_dto_1.QuizResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Квиз не найден' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", quiz_response_dto_1.QuizResponseDto)
], QuizController.prototype, "getQuiz", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Отправить ответы на квиз' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID квиза' }),
    (0, swagger_1.ApiBody)({
        description: 'Массив ответов на вопросы квиза',
        type: create_quiz_dto_1.CreateQuizAnswerDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Возвращает результат проверки ответов',
        type: quiz_result_dto_1.QuizResultDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Квиз не найден' }),
    (0, common_1.Post)(':id/submit'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_quiz_dto_1.CreateQuizAnswerDto]),
    __metadata("design:returntype", quiz_result_dto_1.QuizResultDto)
], QuizController.prototype, "submitQuiz", null);
exports.QuizController = QuizController = __decorate([
    (0, swagger_1.ApiTags)('Quizzes'),
    (0, common_1.Controller)('quiz'),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
//# sourceMappingURL=quiz.controller.js.map