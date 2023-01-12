import { IUser, IUserModel } from './types';

export class User implements IUser {
  public name: string;
  public id: number;
  public birthDate: Date;

  constructor(model: IUserModel) {
    this.name = model.name;
    this.id = Number(model.id);
    this.birthDate = new Date(model.birthDate);
  }

  public Hydrate = (model: IUserModel) => {
    this.name = model.name;
    this.id = Number(model.id);
    this.birthDate = new Date(model.birthDate);
  };

  public toJson = (): IUserModel => {
    return {
      name: this.name,
      id: this.id.toString(),
      birthDate: this.birthDate.toString(),
    };
  };
}
