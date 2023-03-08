export interface Feedback{
   id?:number,
   senderId?:number,
   receiverId?:any,
   supervisorName?:string,
   employeeName?:string,
   title?:String,
   description?:string,
   created_date?:Date,
   lastUpdatedDate?:Date
 }