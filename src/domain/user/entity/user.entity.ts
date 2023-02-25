import { Entity } from 'src/domain/common/entity';

export class User extends Entity {
  private _id: number;
  private _username: string;
  private _password: string;
  private _fullName: string;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get fullName(): string {
    return this._fullName;
  }
  public set fullName(value: string) {
    this._fullName = value;
  }

  constructor(
    props: Partial<{
      id: number;
      username: string;
      password: string;
      fullName: string;
    }>
  ) {
    super();
    this._id = props.id;
    this._username = props.username;
    this._password = props.password;
    this._fullName = props.fullName;
  }
}
