export const PAYMENT_INSTRUCTION = [
  {
    id: 1,
    method: "qrisPayment",
    instruction: [
      "Scan the barcode from an app that supports QRIS payment method.",
      "Double-check the total payment of your order and ensure your balance is sufficient.",
      "The system will generate a QRIS according to the amount of your order.",
      "Payment deadline is 5 minutes after the QRIS is generated.",
    ],
  },
  {
    id: 2,
    method: "bankPayment",
    instruction: [
      "Login to your mBanking",
      "Select Pay, then select Multi Payment",
      "Choose Service Provider: Midtrans, Enter the Virtual Account number 123456789 and select Continue",
      "Check that the information displayed on the screen is correct. Then enter your PIN and select OK",
    ],
  },
];
