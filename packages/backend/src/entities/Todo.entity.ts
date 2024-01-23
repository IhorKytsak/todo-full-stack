import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { User } from './User.entity';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
