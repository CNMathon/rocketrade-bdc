import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BussinessExecptionFilter } from './filters/bussiness-execption.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BadRequestExecptionFilter } from './filters/bad-request-execption.filter';
import { ServiceInternalExceptionFilter } from './filters/service-internal-exception.filter';
import { BdcController } from './service/bdc/bdc.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new BussinessExecptionFilter());
  app.useGlobalFilters(new BadRequestExecptionFilter());
  app.useGlobalFilters(new ServiceInternalExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('🚀 Rocket Trade - API Document')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    include: [BdcController],
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
}
bootstrap();
