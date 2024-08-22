// types/index.d.ts
declare namespace Express {
   export interface Request {
      user?: {
         id: string;
         role: string;
      };
   }

   export interface Response {
      [key: string]: any;
      status: CallableFunction;
   }
}
