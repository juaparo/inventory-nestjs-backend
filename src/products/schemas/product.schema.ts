import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop({ default: 0 })
    unitPrice: number;

    @Prop({ default: 0 })
    minStock: number;

    @Prop({ maxLength: 150})
    description: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
