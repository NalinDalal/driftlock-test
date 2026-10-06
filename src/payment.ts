export function handlePayment(obj: { id: string; amount: number; source: string }) {
  return { chargeFrom: obj.source, cents: obj.amount };
}
