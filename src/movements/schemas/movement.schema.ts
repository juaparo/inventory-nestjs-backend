import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { MovementTypeEnum } from "../interfaces/movementType.interface";

export type MovementDocument = HydratedDocument<Movement>

@Schema({ timestamps: true })
export class Movement {
    @Prop({
        type: String,
        enum: Object.values(MovementTypeEnum),
        required: true
    })
    moveType!: string

    @Prop({
        type: Number,
        required: true,
        default: 1
    })
    quantity!: number

    @Prop({
        type: Date,
        required: false,
        default: Date.now
    })
    date?: string
}

export const MovementSchema = SchemaFactory.createForClass(Movement)
