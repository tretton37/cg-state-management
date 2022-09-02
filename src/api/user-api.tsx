export const GetUserById = (id: number): Promise<IUser> => {
  const user = userData.find((user) => user.id === id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user !== undefined) {
        return resolve(new User(user));
      }
      return reject('No user found');
    }, 5000);
  });
};

export const GetUsers = (): Promise<IUser[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(userData.map((u) => new User(u)));
    }, 5000);
  });
};

const SaveUser = (user: IUserModel): Promise<boolean> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      return reject(false);
    }, 5000);
  });
};

const userData: IUserModel[] = [
  {
    name: 'David',
    id: 1,
    birthDate: new Date(1979),
  },
  {
    name: 'Victor',
    id: 2,
    birthDate: new Date(1980),
  },
  {
    name: 'Christian',
    id: 3,
    birthDate: new Date(1981),
  },
  {
    name: 'Joakim',
    id: 4,
    birthDate: new Date(1982),
  },
];

export class User implements IUser {
  public name: string;
  public id: number;
  public birthDate: Date;

  constructor(model: IUserModel) {
    this.name = model.name;
    this.id = model.id;
    this.birthDate = model.birthDate;
  }

  public Save = () => {
    return SaveUser(this);
  };

  public Hydrate = (model: IUserModel) => {
    this.name = model.name;
    this.id = model.id;
    this.birthDate = model.birthDate;
  };
}

export interface IUser extends IUserModel {
  Save: () => Promise<boolean>;
}

export interface IUserModel {
  name: string;
  id: number;
  birthDate: Date;
}