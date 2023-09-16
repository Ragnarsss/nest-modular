import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class UpdateCategoyDto extends PartialType(CreateCategoryDto) {}
