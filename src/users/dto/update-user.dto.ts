import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Nickname must be a string' })
  @Length(5, 50, { message: 'Nickname must be between 5 and 50 characters' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @Length(6, 15, { message: 'Password must be between 6 and 15 characters' })
  password?: string;

  @IsOptional()
  @IsString({ message: 'Nickname must be a string' })
  @Length(2, 30, { message: 'Nickname must be between 2 and 30 characters' })
  nickname?: string;
}
