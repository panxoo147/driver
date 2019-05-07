export class Course{
  private id:number;
  private code:string;
  private name:string;
  private currentLoc:string;
  private nextLoc:string;
  private status:string;


  constructor(id:number, code:string,name:string){
    this.id = id;
    this.code = code;
    this.name = name;
  }
  public getId():number{
    return this.id;
  }
  public getCode():string{
    return this.code;
  }
  public getName():string{
    return this.name;
  }
}