export default class FetchUserDto {
  public userId: string;

  constructor(props: { userId: string }) {
    this.userId = props.userId;
  }
}
