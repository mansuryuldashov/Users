import { IsDefined, IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsDefined({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
  name!: string;

  @IsDefined({ message: 'Nickname is required' })
  @IsString({ message: 'Nickname must be a string' })
  @Length(2, 30, { message: 'Nickname must be between 2 and 30 characters' })
  nickname!: string;

  @IsDefined({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsString({ message: 'Email must be a string' })
  @Length(5, 50, { message: 'Email must be between 5 and 50 characters' })
  email!: string;

  @IsDefined({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @Length(6, 15, { message: 'Password must be between 6 and 15 characters' })
  password!: string;
}
