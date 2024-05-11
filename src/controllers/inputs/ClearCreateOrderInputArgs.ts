import { OrderType } from "../orders.controller";

export const ClearCreateOrderInputArgs = (
  data: OrderType,
  sessionId?: string
) => {
  return {
    itemId: data.itemId,
    orderType: data.type,
    status: data.status,
    itemCount: data.count,
    sessionId: sessionId ? sessionId : "",
    price: data.price,
  };
};
