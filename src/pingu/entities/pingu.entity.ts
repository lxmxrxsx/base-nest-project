import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pingu {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  isAngry: boolean;
}
