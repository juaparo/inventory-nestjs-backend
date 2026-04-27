import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categoryName!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    description!: string;
}
