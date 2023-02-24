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
  return new Promise((resolve, reject) => {
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
    birthDate: new Date('1960-01-07').toISOString(),
  },
  {
    name: 'Christian',
    id: '3',
    birthDate: new Date('1990-06-07').toISOString(),
  },
  {
    name: 'Andre',
    id: '4',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Sara',
    id: '5',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Filip',
    id: '6',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Abdallah',
    id: '7',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Bastian',
    id: '8',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Ryan',
    id: '9',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Ariton',
    id: '10',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Teodor',
    id: '11',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Carl',
    id: '12',
    birthDate: new Date('1982').toISOString(),
  },
  {
    name: 'Olof',
    id: '13',
    birthDate: new Date('1982').toISOString(),
  },
];
