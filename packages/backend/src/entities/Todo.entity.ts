import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: false
  })
  isCompleted: boolean;

  @Column({
    default: false
  })
  isPrivate: boolean;
}
