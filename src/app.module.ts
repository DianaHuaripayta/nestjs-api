import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://DIana:database@cluster0.yzxt7.mongodb.net/api-products?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
