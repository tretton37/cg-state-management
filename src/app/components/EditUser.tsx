import React, { useState } from 'react';
import { IUser } from '../../api/user-api';
import { Button, FormGroup, Input, Label } from '../../ui';
import { EditUserForm } from './EditUserForm';
import { SelectUser } from './SelectUser';
import { SubmitHandler } from './types';

export const EditUser: React.FC = () => {
  // We need to store which method we fetched the user
  // So that when we save it, we use the same method to save it
  const [user, setUser] = useState<IUser | undefined>();
  const [onSubmitHandler, setOnSubmitHandler] = useState<
    SubmitHandler | undefined
  >();

  return (
    <div>
      <SelectUser />
      {user && onSubmitHandler && (
        <EditUserForm user={user} onSubmitHandler={onSubmitHandler} />
      )}
    </div>
  );
};
