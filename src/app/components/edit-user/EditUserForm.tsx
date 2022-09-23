import { useState } from 'react';
import { IUser } from '../../../api/user-api';
import { FormGroup, Label, Input, Button, InputReadonly } from '../../../ui';
import { SubmitHandler } from '../types';

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
            value={editUser.name}
            onChange={(ev) => {
              const userCopy = { ...editUser, name: ev.target.value };
              setEditUser(userCopy);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Id</Label>
          <InputReadonly defaultValue={user.id} />
          {typeof user.id !== 'number' && (
            <span>Error: ID is not a number</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Birthdate</Label>
          <InputReadonly
            defaultValue={user.birthDate.toISOString().substring(0, 10)}
          />
          {!(user.birthDate instanceof Date) && (
            <span>Error: birthdate is not a date</span>
          )}
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
