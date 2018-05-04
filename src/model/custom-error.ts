

export class CustomError{
  message:string;
  code:string = "DEFAULT";
  status:number;
  cause:any;
  scenario?:any;
  constructor(error:any){
    this.cause=error.stack;
    this.status = error.status  || 500;
    this.code = error.code || error.statusCode || error.errorCode || "DEFAULT";
    this.message = 'Some error occurred!';
  }
}