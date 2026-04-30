import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
    @Prop({ type: String, required: true })
    name!: string;

    @Prop({ type: Number, default: 0 })
    unitPrice!: number;

    @Prop({ type: Number, default: 0, min: 0 })
    stock!: number;

    @Prop({ type: Number, default: 0 })
    minStock!: number;

    @Prop({ type: String, maxLength: 150 })
    description!: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
