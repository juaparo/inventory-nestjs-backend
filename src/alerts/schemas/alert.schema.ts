import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AlertDocument = HydratedDocument<Alert>

@Schema({ timestamps: true })
export class Alert {
    @Prop({
        type: String,
        required: true
    })
    message!: string;

    @Prop({
        type: Date,
        required: false,
        default: Date.now
    })
    date!: Date;

    @Prop({
        type: Boolean,
        required: false,
        default: false
    })
    read!: boolean;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
