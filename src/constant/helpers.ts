export const mask = (amount: string | number) =>
  amount.toString().split('').map(c => '*').join('')