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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizResponseDto = exports.QuestionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QuestionDto {
}
exports.QuestionDto = QuestionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Текст вопроса', example: 'What is the capital of France?' }),
    __metadata("design:type", String)
], QuestionDto.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Варианты ответа', example: ['Berlin', 'Madrid', 'Paris'] }),
    __metadata("design:type", Array)
], QuestionDto.prototype, "options", void 0);
class QuizResponseDto {
}
exports.QuizResponseDto = QuizResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID квиза', example: 1 }),
    __metadata("design:type", Number)
], QuizResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Название квиза', example: 'General Knowledge' }),
    __metadata("design:type", String)
], QuizResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [QuestionDto], description: 'Массив вопросов квиза' }),
    __metadata("design:type", Array)
], QuizResponseDto.prototype, "questions", void 0);
//# sourceMappingURL=quiz-response.dto.js.map