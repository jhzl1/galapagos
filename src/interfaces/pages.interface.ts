import { User } from './list.interface';

export interface Pages {
  UserDetail: User;
  UserList: undefined;
  [key: string]: string | any;
}
