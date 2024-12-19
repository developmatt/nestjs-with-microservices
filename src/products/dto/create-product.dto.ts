import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateProductDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsOptional()
  description: string;
  
  @Min(0)
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Min(1)
  @IsInt()
  @IsNotEmpty()
  categoryId: number;
}
