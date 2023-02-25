export abstract class UseCase {
  public abstract execute(props: any): Promise<any>;
}
