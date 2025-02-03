export * from './user';
export * from './post';
export * from './comment';
export interface BaseModel {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Model implements BaseModel {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(name: string);
    getData(): {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
