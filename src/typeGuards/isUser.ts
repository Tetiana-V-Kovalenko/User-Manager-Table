import { User } from "../types/user";

export function isUser(obj: any): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.username === "string" &&
    typeof obj.email === "string" &&
    typeof obj.phone === "string" &&
    typeof obj.address === "object" &&
    typeof obj.website === "string" &&
    typeof obj.company === "object"
  );
}
