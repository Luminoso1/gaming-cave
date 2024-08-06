import { useLocation } from "wouter";
import { useAuth } from "../utils/hooks/useAuth";

export default function AuthGuard({ children }) {
  const { auth } = useAuth();

  const [, setLocation] = useLocation();
  if (!auth) {
    setLocation("/sign-up");
  }

  return children;
}
