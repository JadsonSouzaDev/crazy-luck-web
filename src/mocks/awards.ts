import { Award } from "@/types/model/Award";

const awards: Award[] = [
  {
    slug: "iphone-14-pro-max",
    title: "iPhone 14 Pro Max",
    description:
      "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
    shortDescription: "Buy now and make it yours!",
    urlImage: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG19.png",
    prices: [
      {
        quantity: 1,
        unitPrice: 0.25,
      },
      {
        quantity: 5,
        unitPrice: 0.2,
      },
      {
        quantity: 10,
        unitPrice: 0.15,
      },
    ],
    soldNumbers: {
      solded: 819,
      total: 1000,
    },
    maxDrawDate: new Date().toString(),
    drawDate: new Date().toString(),
  },

  {
    slug: "playstation-5",
    title: "Playstation 5",
    description:
      "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
    shortDescription: "Buy now and make it yours!",
    urlImage:
      "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png",
    prices: [
      {
        quantity: 1,
        unitPrice: 0.15,
      },
      {
        quantity: 5,
        unitPrice: 0.12,
      },
      {
        quantity: 10,
        unitPrice: 0.1,
      },
    ],
    soldNumbers: {
      solded: 815,
      total: 1000,
    },
    maxDrawDate: new Date().toString(),
    drawDate: new Date().toString(),
  },

  {
    slug: "airpods-max",
    title: "AirPods Max",
    description:
      "Here at Flowbite we focus on markets where technology, innovation, and  capital can unlock long-term value and drive economic growth.",
    shortDescription: "Buy now and make it yours!",
    urlImage:
      "https://help.apple.com/assets/61AFEC45FA5233173908347B/61B0509E1BF38548362237B5/pt_BR/b9f519195f84950573eea5088a49b964.png",
    prices: [
      {
        quantity: 1,
        unitPrice: 0.1,
      },
      {
        quantity: 5,
        unitPrice: 0.08,
      },
      {
        quantity: 10,
        unitPrice: 0.06,
      },
    ],
    soldNumbers: {
      solded: 980,
      total: 1000,
    },
    maxDrawDate: new Date().toString(),
    drawDate: new Date().toString(),
  },
];

export default awards;
