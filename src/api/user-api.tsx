export const GetUserById = (id: number): Promise<IUser> => {
  const user = userData.find((user) => user.id === id.toString());

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user !== undefined) {
        return resolve(new User(user));
      }
      return reject("No user found");
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
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(true);
    }, 5000);
  });
};

const userData: IUserModel[] = [
  {
    name: "David",
    id: "1",
    birthDate: new Date("1979-01-01").toISOString(),
  },
  {
    name: "Victor",
    id: "2",
    birthDate: new Date("1990-01-07").toISOString(),
  },
  {
    name: "Christian",
    id: "3",
    birthDate: new Date("1990-06-07").toISOString(),
  },
  {
    name: "Joakim",
    id: "4",
    birthDate: new Date("1982").toISOString(),
  },
];

export class User implements IUser {
  public name: string;
  public id: number;
  public birthDate: Date;

  constructor(model: IUserModel) {
    this.name = model.name;
    this.id = Number(model.id);
    this.birthDate = new Date(model.birthDate);
  }

  public Save = () => {
    return SaveUser(this.toJson());
  };

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

export interface IUser {
  Save: () => Promise<boolean>;
  Hydrate: (model: IUserModel) => void;
  name: string;
  id: number;
  birthDate: Date;
}

export interface IUserModel {
  name: string;
  id: string;
  birthDate: string;
}
