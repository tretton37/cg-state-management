import React, { useState } from 'react';
import { IUser } from '../../../api/user-api';
import { EditUserForm } from './EditUserForm';
import { SelectUser } from '../SelectUser';
import { StateManagerType } from '../../../examples/types';

export const EditUser: React.FC<EditUserProps> = ({
  statemanager,
  saveUserHandler,
}) => {
  // We need to store which method we fetched the user
  // So that when we save it, we use the same method to save it
  const [user, setUser] = useState<IUser | undefined>();

  return (
    <div>
      <SelectUser statemanager={statemanager} onSuccessHandler={setUser} />
      {user && saveUserHandler && (
        <EditUserForm user={user} onSubmitHandler={saveUserHandler} />
      )}
    </div>
  );
};

interface EditUserProps {
  statemanager: StateManagerType;
  saveUserHandler: (user: IUser) => Promise<boolean>;
}
