import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

// & DTO (Data Transfer Object)
// Define cómo debe lucir el cuerpo de la solicitud al crear un usuario.

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido es requerido' })
  lastName: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
