import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PinguEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  isAngry: boolean;
  @Column()
  badge: string;
}
