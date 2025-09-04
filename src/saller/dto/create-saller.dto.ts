// import {
//   IsBoolean,
//   IsEmail,
//   IsNotEmpty,
//   IsOptional,
//   IsPhoneNumber,
//   IsString,
//   IsUrl,
// } from 'class-validator';

// export class CreateSallerDto {
//   @IsString()
//   @IsNotEmpty()
//   fullName: string;

//   @IsEmail()
//   @IsNotEmpty()
//   email: string;

//   @IsPhoneNumber('UZ')
//   @IsNotEmpty()
//   phoneNumber: string;

//   @IsString()
//   @IsNotEmpty()
//   hashedPassword: string;

//   @IsBoolean()
//   @IsNotEmpty()
//   is_Active: string;

//   @IsString()
//   @IsNotEmpty()
//   address: string;

//   @IsOptional()
//   @IsUrl({}, { message: 'Image must be a valid URL' })
//   image?: string;
// }

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateSallerDto {
  @ApiProperty({ example: 'Azizbek Tursunov' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'azizbek@mail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+998901234567' })
  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ example: '$2b$10$abcdefg1234567' })
  @IsString()
  @IsNotEmpty()
  hashedPassword: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  is_Active: boolean;

  @ApiProperty({ example: 'Toshkent, Chilonzor' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.png' })
  @IsOptional()
  @IsUrl({}, { message: 'Image must be a valid URL' })
  image?: string;
}
