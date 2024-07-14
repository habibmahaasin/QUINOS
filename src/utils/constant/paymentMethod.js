export const PAYMENT_METHOD = [
  {
    id: 1,
    category: "Cashless",
    method: [
      {
        id: 1,
        name: "Ovo Cash",
        slug: "ovo",
      },
      {
        id: 2,
        name: "QRIS",
        slug: "qris",
      },
      {
        id: 3,
        name: "Credit Card",
        slug: "credit-card",
      },
    ],
  },
  {
    id: 2,
    category: "Virtual Account",
    method: [
      {
        id: 4,
        name: "Bank Permata",
        slug: "bank-permata",
      },
      {
        id: 5,
        name: "Bank BCA",
        slug: "bank-bca",
      },
    ],
  },
  {
    id: 3,
    category: "Cashier",
    method: [
      {
        id: 6,
        name: "Pay at the Cashier",
        slug: "cashier",
      },
    ],
  },
];
