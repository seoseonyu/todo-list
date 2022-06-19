import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', default: () => "'-'" })
  description: string;

  @Column({ type: 'boolean', default: () => 'false' })
  isChecked: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  start: Date;

  @Column({ type: 'timestamptz', nullable: true })
  end: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
