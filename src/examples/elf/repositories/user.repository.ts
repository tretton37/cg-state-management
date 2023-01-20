import { createStore, select } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { IUserModel } from '../../../api/types';
import { useObservable } from '@ngneat/react-rxjs';

const elfUsersStore = createStore(
  { name: 'elfUsers' },
  withEntities<IUserModel>()
);

// export const elfUser = ElfUserStore.pipe(select((state) => state));

const users$ = elfUsersStore.pipe(selectAllEntities());

const tempUsers: IUserModel[] = [
  { id: '1', name: 'User 1', birthDate: new Date('1990-06-07').toDateString() },
  { id: '2', name: 'User 2', birthDate: new Date('1990-01-07').toDateString() },
];

elfUsersStore.update(setEntities(tempUsers));

export const useUsers = () => {
  const [users] = useObservable(users$);
  return users;
};
