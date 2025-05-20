import type { ReactNode, FC } from "react";
import { useAxiosNavigation } from "@/api/useRequest";
interface AxiosNavigationProps {
  children: ReactNode;
}

/**
 * 封装请求拦截器，用于处理请求前后的操作，比如设置请求头、请求参数等。
 */
export const AxiosNavigation: FC<AxiosNavigationProps> = ({ children }) => {
  useAxiosNavigation();
  return <>{children}</>;
};
