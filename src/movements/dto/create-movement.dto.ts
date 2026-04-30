import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { MovementTypeEnum } from "../interfaces/movementType.interface";

export class CreateMovementDto {

    @IsNotEmpty()
    @IsEnum(MovementTypeEnum)
    moveType!: MovementTypeEnum

    @IsNumber()
    @Min(1)
    quantity!: number
    
    @IsOptional()
    @IsDateString()
    date?: string
}
