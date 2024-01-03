import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Pingu } from '../../model/pingu.model';

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

  toDomain(): Pingu {
    return {
      id: this.id,
      name: this.name,
      isAngry: this.isAngry,
      badge: this.badge,
    };
  }
}
