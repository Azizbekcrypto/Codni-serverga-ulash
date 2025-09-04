import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
  virtuals: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Saller extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  hashedPassword: string;

  @Prop({ required: true })
  is_Active: boolean;

  @Prop()
  image: string;

  @Prop({ required: true })
  address: string;
}

const SallerSchema = SchemaFactory.createForClass(Saller);

export { SallerSchema };
