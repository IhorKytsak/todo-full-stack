import { BaseEntity } from 'typeorm';

class EntityWithId extends BaseEntity {
  id: number;
}

export type BaseEntityWithId = typeof EntityWithId;
