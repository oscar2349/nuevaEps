export class Usuario {
  id!: number;
  username!: string;
  password!: string;
  enabled!: boolean;
  admin!: boolean;
  email!: string;
  roles!: Role[];
}

export class Role {
  id!: number;
  name!: string;
}
