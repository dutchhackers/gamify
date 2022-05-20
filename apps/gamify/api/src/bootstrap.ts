import { INestApplication, ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FirebaseAuthGuard, RolesGuard } from '@gamify/auth';

/**
 * Configures the application. Sets a validation pipe, enable CORS, setup Guards, and adds a swagger documentation.
 * @param app The application
 */
export function configure(app: INestApplication): void {
    app.useGlobalPipes(new ValidationPipe({
      transform: true,
      whitelist: true,
    }));
    app.enableCors();
  
    const authGuard = app.get(FirebaseAuthGuard);
    const rolesGuard = app.get(RolesGuard);
    app.useGlobalGuards(authGuard, rolesGuard);
  
  
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Gamify API')
      .setDescription('Gamify API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, swaggerDoc);
}