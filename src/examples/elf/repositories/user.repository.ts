import { createStore } from '@ngneat/elf';
import {
  getActiveEntity,
  getEntity,
  selectActiveEntity,
  selectAllEntities,
  setActiveId,
  setEntities,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { joinRequestResult, trackRequestResult } from '@ngneat/elf-requests';
import { IUserModel, IUser } from '../../../api/types';
import { useObservable } from '@ngneat/use-observable';
import { from, tap } from 'rxjs';
import { GetUserById, GetUsers } from '../../../api/user-api';
import { useEffect } from 'react';

const elfUsersStore = createStore(
  { name: 'elfUsers' },
  withEntities<IUserModel>(),
  withActiveId()
);

const users$ = elfUsersStore.pipe(
  selectAllEntities(),
  joinRequestResult(['elfUsers'], { initialStatus: 'idle' })
);

const currentUser$ = elfUsersStore.pipe(selectActiveEntity());

const setUsers = (users: IUser[]) => {
  elfUsersStore.update(setEntities(users.map(mapUserToUserModel)));
};

const fetchElfUsers = () => {
  return from(GetUsers()).pipe(tap(setUsers), trackRequestResult(['elfUsers']));
};

export const setCurrentUser = (id: number) => {
  return elfUsersStore.update(setActiveId(id));
};

// const fetchElfUser = (id: number) => {
//   return from(GetUserById(id)).pipe(tap(setUsers), trackRequestResult(['elfUsers']));
// };

export const getUser = (id: number) => {
  return elfUsersStore.query(getEntity(id.toString()));
};

export const useUsers = () => {
  const [users] = useObservable(users$);

  useEffect(() => {
    fetchElfUsers().subscribe();
  }, []);

  return users;
};

export const useCurrentUser = () => {
  const [user] = useObservable(currentUser$);
  return user;
};

const mapUserToUserModel = (user: IUser): IUserModel => ({
  id: user.id.toString(),
  name: user.name,
  birthDate: user.birthDate.toDateString(),
});
