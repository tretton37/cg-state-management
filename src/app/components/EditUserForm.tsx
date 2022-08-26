import { useState } from 'react';
import { IUser } from '../../api/user-api';
import { FormGroup, Label, Input, Button, InputReadonly } from '../../ui';
import { SubmitHandler } from './types';

export const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  onSubmitHandler,
}) => {
  const [editUser, setEditUser] = useState<IUser>(() => user);

  return (
    <div>
      <div>
        <FormGroup>
          <Label>Name</Label>
          <Input
            value={user.name}
            onChange={(ev) => {
              editUser.name = ev.target.value;
              setEditUser(editUser);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Id</Label>
          <InputReadonly value={user.id} />
        </FormGroup>
        <FormGroup>
          <Label>Birthdate</Label>
          <InputReadonly
            value={user.birthDate.toISOString().substring(0, 10)}
          />
        </FormGroup>
      </div>
      <FormGroup>
        <Button onClick={() => onSubmitHandler(editUser)}>save user</Button>
      </FormGroup>
    </div>
  );
};

interface EditUserFormProps {
  user: IUser;
  onSubmitHandler: SubmitHandler;
}
