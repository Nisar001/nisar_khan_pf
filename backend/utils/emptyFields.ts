type AnyObject = { [key: string]: any };

export const isFieldEmpty = (obj: AnyObject): boolean => {
   for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
         const value = obj[key];
         if (
            value === null ||
            value === undefined ||
            (typeof value === 'string' && value.trim() === '') ||
            (Array.isArray(value) && value.length === 0)
         ) {
            return true;
         }
      }
   }
   return false;
};

export const areFieldsEmpty = (obj: AnyObject, fields: string[]): boolean => {
   for (const field of fields) {
      const value = obj[field];
      if (
         value === null ||
         value === undefined ||
         (typeof value === 'string' && value.trim() === '') ||
         (Array.isArray(value) && value.length === 0)
      ) {
         return true;
      }
   }
   return false;
};
