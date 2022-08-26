import { IUser } from '../../api/user-api';

export type SubmitHandler = (user: IUser) => Promise<boolean>;
