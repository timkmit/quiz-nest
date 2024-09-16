"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const quiz_module_1 = require("./quiz/quiz.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Quiz API')
        .setDescription('Данный API позволяет каждому запросить квизы и ответы на них. Всего 10 вариантов от 1 до 10, которые можно получить по ID. Темы "IT", "Столицы", "Животные", "Языки программирования", "Великие ученые", "Мировая история", "География", "Концепции в IT", "Достопримечательности", "Литература"')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [quiz_module_1.QuizModule],
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    app.getHttpAdapter().get('/', (req, res) => {
        res.redirect('/api');
    });
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map