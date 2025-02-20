import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// & ENTIDADES
// Una entidad es una clase que representa una tabla en la base de datos.
// Cada instancia de la entidad corresponde a una fila en la tabla.

@Entity()
export class User {
  // & Tipado de los campos de la tabla
	// @PrimaryGeneratedColumn() crea una columna de clave principal que se generará automáticamente de manera incremental.
  @PrimaryGeneratedColumn()
  id: number;

	// @Column() crea una columna de base de datos.
  @Column()
  firstName: string;

  @Column()
  lastName: string;

	// @Column({ default: true }) crea una columna de base de datos con un valor predeterminado.
  @Column({ default: true })
  isActive: boolean;
}

// Los @ son decoradores de typescript para definir metadatos a clases, propiedades, métodos, parámetros y accesores.