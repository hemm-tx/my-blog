import axios from "axios";
import { showMessage } from "./status.ts";
import { message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: +import.meta.env.VITE_API_TIMEOUT,
  headers: {
    "Source-Client": "PC-web",
  },
});

instance.interceptors.request.use((_config) => {
  // 由于没有后端信息，暂时先用一个假的 token 信息
  const userInfo = { access_token: "", token_type: "Bearer" };

  const { access_token, token_type } = userInfo;
  if (access_token !== "" && token_type !== "") {
    _config.headers.Authorization = `${token_type} ${access_token}`;
  }
  return _config;
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error;
  }
);

/**
 * 封装axios请求
 * @param url 请求的url路径
 * @param params 请求参数
 * @param method 请求方法，GET 或者 POST
 * @param headers 请求头
 * @returns 返回实例对象
 */
export async function request(
  url: string = "",
  params: { [key: string]: unknown } = {},
  method: "GET" | "POST" | "OPTIONS" = "GET",
  headers: { [key: string]: string } = {}
) {
  return new Promise((resolve, reject) => {
    let promise;
    instance.defaults.headers = { ...instance.defaults.headers, ...headers };

    if (method === "GET") promise = instance({ url, params });
    else if (method === "POST") promise = instance({ url, data: params, method: "POST" });
    else promise = instance({ url, method: "OPTIONS" });

    promise.then((res) => resolve(res)).catch((err) => reject(err));
  });
}

export function useAxiosNavigation() {
  const navRef = useRef(useNavigate());

  useEffect(() => {
    const interceptor = instance.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (error?.response?.status) {
          // case 500:
          //   navRef.current("/");
          //   break;
          case 401:
            Modal.info({
              title: "登录失效",
              content: "登录已失效，请重新登录",
              onOk: () => navRef.current("/login"),
            });
            break;
          default:
            message.warning(showMessage(error.response.status));
        }
        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.response.eject(interceptor);
    };
  }, []);
}
