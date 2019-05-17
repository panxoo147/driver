export class Course{
  private memID:number;
    
  private Username:string;

  private name:string;

  private route:number;
  
  
  constructor(memID:number, Username:string,name:string,route:number){
    this.memID = memID;
    this.Username = Username;
    this.name = name;
    this.route=route;
  }

  public getMemid():number{
       return this.memID
  }
  public getUname():string{
      return this.Username;
 }

  public getName():string{
    return this.name;
  }

  public getRoute():number{
      return this.route;
 }
}