import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface UserPayload {
  id: string;
  email: string;
  name: string;
}

export const getUserFromToken = (): UserPayload | null => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<UserPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const getUserId = (): string | null => {
  const user = getUserFromToken();
  return user ? user.id : null;
};
