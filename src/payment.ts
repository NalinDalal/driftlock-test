export function handlePayment(obj: { id: string; amount: number; source: string }) {
  return { chargeFrom: obj.payment_method, cents: obj.amount };
}
