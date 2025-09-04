import { Module } from '@nestjs/common';
import { SallerService } from './saller.service';
import { SallerController } from './saller.controller';
import { Saller, SallerSchema } from './schemas/saller.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Saller.name, schema: SallerSchema }]),
  ],

  controllers: [SallerController],
  providers: [SallerService],
  exports: [SallerService],
})
export class SallerModule {}
