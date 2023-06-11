const myHttp = require("http");

const allWallets = [
  {
    id: 0,
    amount: 500,
    number: "01061005364",
    dailyLimit: 30000,
    monthlyLimit: 100000,
    availableBalance: 30000,
    currentBalance: 30000,
    transactions: [
      {
        time: "05 2023 00:37:25",
        action: "receive",
        budget: 3.2,
      },
      {
        time: "05 2023 00:37:25",
        action: "send",
        budget: 5,
      },
      {
        time: "05 2023 00:37:25",
        action: "send",
        budget: 9,
      },
    ],
  },
  {
    id: 1,
    amount: 200,
    number: "01021257615",
    dailyLimit: 30000,
    monthlyLimit: 100000,
    availableBalance: 30000,
    currentBalance: 80000,
    transactions: [
      {
        time: "05 2023 00:37:25",
        action: "receive",
        budget: 3.2,
      },
      {
        time: "05 2023 00:37:25",
        action: "send",
        budget: 5,
      },
    ],
  },  {
    id: 2,
    amount: 200,
    number: "01021257615",
    dailyLimit: 30000,
    monthlyLimit: 100000,
    availableBalance: 30000,
    currentBalance: 80000,
    transactions: [
      {
        time: "05 2023 00:37:25",
        action: "receive",
        budget: 3.2,
      },
      {
        time: "05 2023 00:37:25",
        action: "send",
        budget: 5,
      },
    ],
  },
  
];

const specificWallets = [
  {
    id: 1,
    amount: 200,
    number: "01021257615",
    dailyLimit: 30000,
    monthlyLimit: 100000,
    availableBalance: 30000,
    currentBalance: 80000,
    transactions: [
      {
        time: "05 2023 00:37:25",
        action: "receive",
        budget: 3.2,
      },
      {
        time: "05 2023 00:37:25",
        action: "send",
        budget: 5,
      },
    ],
  },{
    id: 2,
    amount: 200,
    number: "01121257615",
    dailyLimit: 30000,
    monthlyLimit: 100000,
    availableBalance: 30000,
    currentBalance: 80000,
    transactions: [
      {
        time: "05 2023 00:37:25",
        action: "receive",
        budget: 3.2,
      },
      {
        time: "05 2023 00:37:25",
        action: "send",
        budget: 5,
      },
    ],
  },
];

const server = myHttp.createServer((req, res) => {
  if (req.url === "/allWallets" && req.method === "GET") {
    res.end(JSON.stringify(allWallets));
  } else if (req.url === "/specifiWallets" && req.method === "GET") {
    res.end(JSON.stringify(specificWallets));
  }else{
    res.end('404 page Not Found');

  }
});

server.listen(3000, () => {
  console.log("server is running");
});

