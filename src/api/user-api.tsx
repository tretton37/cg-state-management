import { IUser, IUserModel } from './types';
import { User } from './user';

export const GetUserById = (id: number): Promise<IUser> => {
  const user = userData.find((user) => user.id === id.toString());

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user !== undefined) {
        return resolve(new User(user));
      }
      return reject('No user found');
    }, 100);
  });
};

export const GetUsers = (): Promise<IUser[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(userData.map((u) => new User(u)));
    }, 100);
  });
};

export const SaveUser = (user: IUserModel): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(true);
    }, 100);
  });
};

const userData: IUserModel[] = [
  {
    name: 'David',
    id: '1',
    birthDate: new Date('1979-01-01').toISOString(),
  },
  {
    name: 'Victor',
    id: '2',
    birthDate: new Date('1990-01-07').toISOString(),
  },
  {
    name: 'Christian',
    id: '3',
    birthDate: new Date('1990-06-07').toISOString(),
  },
  {
    name: 'Joakim',
    id: '4',
    birthDate: new Date('1982').toISOString(),
  },
];
