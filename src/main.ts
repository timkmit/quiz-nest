import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { QuizModule } from './quiz/quiz.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Quiz API')
  .setDescription('Данный API позволяет каждому запросить квизы и ответы на них. Всего 10 вариантов от 1 до 10, которые можно получить по ID. Темы "IT", "Столицы", "Животные", "Языки программирования", "Великие ученые", "Мировая история", "География", "Концепции в IT", "Достопримечательности", "Литература"')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config, {
    include: [QuizModule],
  });
  SwaggerModule.setup('api', app, document);

  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect('/api');
  });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
