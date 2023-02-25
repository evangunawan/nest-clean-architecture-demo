export default class CreateUserDto {
  public username: string;
  public password: string;
  public fullName: string;

  constructor(props: { username: string; password: string; fullName: string }) {
    this.username = props.username;
    this.password = props.password;
    this.fullName = props.fullName;
  }
}
