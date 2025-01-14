type ILogin = {
  email: string;
  password: string;
};

type IUserAuth = {
  id: number;
  name: string;
  email: string;
};

type IAuthState = {
  user: IUserAuth | null;
  roles: string[];
};
