import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSallerDto } from './dto/create-saller.dto';
import { UpdateSallerDto } from './dto/update-saller.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Saller } from './schemas/saller.schemas';
import { isValidObjectId, Model } from 'mongoose';
import { ISuccessResponse } from 'src/interfaces/succes.response';
import { getSuccessRes } from 'src/utils/getSuccesresponse';

@Injectable()
export class SallerService {
  constructor(
    @InjectModel(Saller.name) private readonly sallerModel: Model<Saller>,
  ) {}

  // Post
  async create(createSallerDto: CreateSallerDto): Promise<ISuccessResponse> {
    const existsEmail = await this.sallerModel.findOne({
      // Email borligini tekshirish
      email: createSallerDto.email,
    });
    if (existsEmail) {
      throw new ConflictException('Email already exists');
    }

    const newSaller = await this.sallerModel.create(createSallerDto);
    return getSuccessRes(newSaller, 201);
  }

  // Get
  async findAll(): Promise<ISuccessResponse> {
    const sallers = await this.sallerModel.find();
    return getSuccessRes(sallers);
  }

  // GetById
  async findOne(id: string): Promise<ISuccessResponse> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Invalid ID format');
    }

    const saller = await this.sallerModel.findById(id);
    if (!saller) {
      // saller(id) bo'lmasa Notfound  error beramiz
      throw new NotFoundException('Saller not found');
    }

    return getSuccessRes(saller);
  }

  // Patch
  async update(
    id: string,
    updateSallerDto: UpdateSallerDto,
  ): Promise<ISuccessResponse> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Invalid ID format');
    }

    const { email } = updateSallerDto; // email kelyaptimi tekshirib olamiz
    if (email) {
      const existsEmail = await this.sallerModel.findOne({ email });
      if (existsEmail && existsEmail.id !== id) {
        throw new ConflictException('Email already exists');
      }
    }
    const saller = await this.sallerModel.findByIdAndUpdate(
      id,
      updateSallerDto,
      {
        new: true,
      },
    );
    if (!saller) {
      throw new NotFoundException('Saller not found');
    }
    return getSuccessRes(saller);
  }

  async remove(id: string): Promise<ISuccessResponse> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException('Invalid ID format');
    }

    const saller = await this.sallerModel.findByIdAndDelete(id);
    if (!saller) {
      throw new NotFoundException('Saller not found');
    }
    return getSuccessRes({});
  }
}
