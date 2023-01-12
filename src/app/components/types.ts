import { IUser } from '../../api/types';

export type SubmitHandler = (user: IUser) => Promise<boolean>;
