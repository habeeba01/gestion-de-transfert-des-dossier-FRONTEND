import { Role } from "../role/role";

export class User {
  public username !: string;
  public password !: string;
  public roles !: Array<Role>;
}
