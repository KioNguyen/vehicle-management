import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  // DeleteDateColumn,
} from 'typeorm';

export abstract class AbstractEntity<Entity> extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @Column({ nullable: true })
  // deletedAt?: Date;

  @Column({ type: 'uuid', nullable: true })
  createdBy: string;

  @Column({ type: 'uuid', nullable: true })
  updatedBy: string;

  // @Column({ type: 'uuid', nullable: true })
  // deletedBy: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(partial?: Partial<Entity>) {
    super();
    if (partial) Object.assign(this, partial);
  }
}
