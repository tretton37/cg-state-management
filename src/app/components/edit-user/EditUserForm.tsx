import { useEffect, useState } from 'react';
import { IUser } from '../../../api/types';
import { User } from '../../../api/user';
import { FormGroup, Label, Input, Button, InputReadonly } from '../../../ui';
import { SubmitHandler } from '../types';

export const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  onSubmitHandler,
}) => {
  const [editUser, setEditUser] = useState<IUser>({ ...user });

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  return (
    <div>
      <div>
        <FormGroup>
          <Label>Name</Label>
          <Input
            value={editUser.name}
            onChange={(ev) => {
              setEditUser(
                new User({ ...editUser.toJson(), name: ev.target.value })
              );
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Id</Label>
          <InputReadonly value={editUser.id} />
          {typeof editUser.id !== 'number' && (
            <span>Error: ID is not a number</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Birthdate</Label>
          <InputReadonly
            value={editUser.birthDate.toISOString().substring(0, 10)}
          />
          {!(editUser.birthDate instanceof Date) && (
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
