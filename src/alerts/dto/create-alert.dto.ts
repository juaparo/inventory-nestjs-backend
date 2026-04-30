import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAlertDto {
    @IsString()
    @IsNotEmpty()
    message!: string

    @IsOptional()
    @IsDateString()
    date?: string

    @IsBoolean()
    @IsOptional()
    read?: boolean

}
