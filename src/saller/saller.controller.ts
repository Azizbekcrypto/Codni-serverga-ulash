// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { SallerService } from './saller.service';
// import { CreateSallerDto } from './dto/create-saller.dto';
// import { UpdateSallerDto } from './dto/update-saller.dto';

// @Controller('saller')
// export class SallerController {
//   constructor(private readonly sallerService: SallerService) {}

//   @Post()
//   create(@Body() createSallerDto: CreateSallerDto) {
//     return this.sallerService.create(createSallerDto);
//   }

//   @Get()
//   findAll() {
//     return this.sallerService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.sallerService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateSallerDto: UpdateSallerDto) {
//     return this.sallerService.update(id, updateSallerDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.sallerService.remove(id);
//   }
// }


import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SallerService } from './saller.service';
import { CreateSallerDto } from './dto/create-saller.dto';
import { UpdateSallerDto } from './dto/update-saller.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Saller') // Swagger kategoriyasi
@Controller('saller')
export class SallerController {
  constructor(private readonly sallerService: SallerService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi sotuvchi qo‘shish' })
  @ApiBody({ type: CreateSallerDto })
  create(@Body() createSallerDto: CreateSallerDto) {
    return this.sallerService.create(createSallerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha sotuvchilarni olish' })
  findAll() {
    return this.sallerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID bo‘yicha sotuvchini olish' })
  @ApiParam({ name: 'id', description: 'Sotuvchi ID' })
  findOne(@Param('id') id: string) {
    return this.sallerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ID bo‘yicha sotuvchini yangilash' })
  @ApiParam({ name: 'id', description: 'Sotuvchi ID' })
  @ApiBody({ type: UpdateSallerDto })
  update(@Param('id') id: string, @Body() updateSallerDto: UpdateSallerDto) {
    return this.sallerService.update(id, updateSallerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ID bo‘yicha sotuvchini o‘chirish' })
  @ApiParam({ name: 'id', description: 'Sotuvchi ID' })
  remove(@Param('id') id: string) {
    return this.sallerService.remove(id);
  }
}
