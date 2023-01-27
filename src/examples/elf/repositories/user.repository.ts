import { createStore, select } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { joinRequestResult, trackRequestResult } from '@ngneat/elf-requests';
import { IUserModel, IUser } from '../../../api/types';
import { useObservable } from '@ngneat/react-rxjs';
import { from, tap } from 'rxjs';
import { GetUsers } from '../../../api/user-api';
import { useEffect } from 'react';

const elfUsersStore = createStore(
  { name: 'elfUsers' },
  withEntities<IUserModel>()
);

// export const elfUser = ElfUserStore.pipe(select((state) => state));

const users$ = elfUsersStore.pipe(
  selectAllEntities(),
  joinRequestResult(['elfUsers'], { initialStatus: 'idle' })
);

const setUsers = (users: IUser[]) => {
  elfUsersStore.update(setEntities(users.map(mapUserToUserModel)));
};

const fetchElfUsers = () => {
  return from(GetUsers()).pipe(tap(setUsers), trackRequestResult(['elfUsers']));
};

export const useUsers = () => {
  const [users] = useObservable(users$);

  useEffect(() => {
    fetchElfUsers().subscribe();
  }, []);

  return users;
};

const mapUserToUserModel = (user: IUser): IUserModel => ({
  id: user.id.toString(),
  name: user.name,
  birthDate: user.birthDate.toDateString(),
});
