import { IsString, IsNumber, Min, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsNumber()
    @Min(0)
    unitPrice!: number;

    @IsNumber()
    @Min(0)
    stock!: number;

    @IsNumber()
    @Min(0)
    minStock!: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    description!: string;
}
