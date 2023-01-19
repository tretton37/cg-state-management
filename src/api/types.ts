export interface IUser {
  Hydrate: (model: IUserModel) => void;
  toJson: () => IUserModel;
  name: string;
  id: number;
  birthDate: Date;
  toJson: () => IUserModel;
}

export interface IUserModel {
  name: string;
  id: string;
  birthDate: string;
}
