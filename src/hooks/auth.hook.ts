import { useLoginMutation } from "../Redux/features/auth/authApi";

export const useUserLogin = () => {
  return useLoginMutation();
};