import { createStore } from '@ngneat/elf';
import {
  getEntity,
  selectActiveEntity,
  selectAllEntities,
  setActiveId,
  setEntities,
  updateEntities,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { joinRequestResult, trackRequestResult } from '@ngneat/elf-requests';
import { IUserModel, IUser } from '../../../api/types';
import { useObservable } from '@ngneat/use-observable';
import { from, tap } from 'rxjs';
import { GetUsers, SaveUser } from '../../../api/user-api';
import { useEffect } from 'react';
import { syncState } from 'elf-sync-state';

const elfUsersStore = createStore(
  { name: 'elfUsers' },
  withEntities<IUserModel>(),
  withActiveId()
);

syncState(elfUsersStore);

const users$ = elfUsersStore.pipe(
  selectAllEntities(),
  joinRequestResult(['elfUsers'], { initialStatus: 'idle' })
);

const currentUser$ = elfUsersStore.pipe(selectActiveEntity());

const setUsers = (users: IUser[]): void => {
  elfUsersStore.update(setEntities(users.map(mapUserToUserModel)));
};

const fetchElfUsers = () => {
  return from(GetUsers()).pipe(tap(setUsers), trackRequestResult(['elfUsers']));
};

export const setCurrentUser = (id: number): void => {
  return elfUsersStore.update(setActiveId(id));
};

export const getUser = (id: number): IUserModel | undefined => {
  return elfUsersStore.query(getEntity(id.toString()));
};

export const updateUser = async (user: IUser) => {
  const oldUser = getUser(user.id);
  if (!oldUser) {
    throw new Error('User not found');
  }
  const userModel = mapUserToUserModel(user);
  elfUsersStore.update(updateEntities(user.id.toString(), userModel));

  // API update
  SaveUser(userModel).catch(async (e) => {
    elfUsersStore.update(updateEntities(user.id.toString(), oldUser));
    return false;
  });
  return true;
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
