import { OrderType } from "../orders.controller"

export const ClearCreateOrderInputArgs = (data: OrderType) => {

  return {
    itemId: data.itemId,
    orderType: data.type,
    status: data.status,
    itemCount: data.count,
  }
}