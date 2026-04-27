import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateAlertDto {
    @IsString()
    @IsNotEmpty()
    message!: string

    @IsDate()
    @IsNotEmpty()
    @IsDateString()
    date!: Date

    @IsBoolean()
    @IsNotEmpty()
    read!: boolean
    
}
