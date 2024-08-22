// validation.ts

export function isValidEmail(email: string): boolean {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

export function isValidPhoneNumber(phoneNumber: string): boolean {
   const phoneRegex = /^[2-9]{1}[0-9]{9}$/;
   return phoneRegex.test(phoneNumber);
}
