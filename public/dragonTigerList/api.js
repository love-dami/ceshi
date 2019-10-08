import { request } from "ynw/lib/axios";
import { Message } from "element-ui";
const http = new request({ baseURL: path });
const ErrorCode = require("./errorCode");

//统一处理错误
const response = body => {
  if (body.status != 1) {
    const message = ErrorCode[body.status];
    Message({ type: "error5", message });
    return Promise.reject(message);
  }
  return Promise.resolve(body.data);
};

const appHref = path.replace("/zqcl", "/cjapp");

// 获取股票详情
export const productAdsList = async () => {
  const url = appHref + "/app/productAdsList.htm";
  const send = {
    productId: `3`
  };
  const res = await http.get(url, { params: send });
  return response(res.data);
};
