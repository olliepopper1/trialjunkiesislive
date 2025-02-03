export * from './user';
export * from './post';
export * from './comment';

export interface BaseModel {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Model implements BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(public name: string) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  
  getData() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}