export enum Categories {
  snowboard = "Сноуборды",
  ski = "Лыжи",
  shop = "Сумки",
}

export class ProductItem {
  id: number;
  category: Categories;
  name: string;
  price: number;
  rate: number;
  ordered: boolean;
  constructor(
    id: number,
    name: string,
    price: number,
    rate: number,
    category: Categories
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rate = rate;
    this.ordered = false;
    this.category = category;
  }

  makeOrder?(): void {
    this.ordered = true;
  }
}

const shopDB: Array<ProductItem> = [
  {
    id: 1,
    category: Categories.snowboard,
    name: "Nidecker 132",
    price: 154,
    rate: 5,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 2,
    category: Categories.ski,
    name: "Tiga 43",
    price: 99,
    rate: 4,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 3,
    category: Categories.shop,
    name: "LV rich",
    price: 799,
    rate: 3,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 4,
    category: Categories.snowboard,
    name: "Burton 134",
    price: 146,
    rate: 4,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 5,
    category: Categories.snowboard,
    name: "DC 345",
    price: 214,
    rate: 3,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 6,
    category: Categories.snowboard,
    name: "Salomon",
    price: 344,
    rate: 5,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 7,
    category: Categories.snowboard,
    name: "DC 345",
    price: 214,
    rate: 2,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 8,
    category: Categories.snowboard,
    name: "Atom 214",
    price: 95,
    rate: 4,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 9,
    category: Categories.ski,
    name: "Salomon 321",
    price: 145,
    rate: 3,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 10,
    category: Categories.ski,
    name: "Лыжня 88",
    price: 15,
    rate: 5,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 11,
    category: Categories.ski,
    name: "Atomic 3765",
    price: 58,
    rate: 3,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 12,
    category: Categories.ski,
    name: "Predator 954",
    price: 299,
    rate: 4,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 13,
    category: Categories.ski,
    name: "Stalker 195",
    price: 87,
    rate: 2,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 14,
    category: Categories.shop,
    name: "Two-ta",
    price: 218,
    rate: 5,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 15,
    category: Categories.shop,
    name: "Adidas dude",
    price: 199,
    rate: 5,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 16,
    category: Categories.shop,
    name: "Lacoste 45",
    price: 345,
    rate: 3,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 17,
    category: Categories.shop,
    name: "Furla",
    price: 599,
    rate: 2,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 18,
    category: Categories.shop,
    name: "Armani",
    price: 398,
    rate: 1,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 19,
    category: Categories.shop,
    name: "Boss",
    price: 195,
    rate: 4,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },

  {
    id: 20,
    category: Categories.shop,
    name: "Keddo",
    price: 254,
    rate: 3,
    ordered: false,
    makeOrder(): void {
      this.ordered = true;
    },
  },
];

export const getProductsByCategory = async (
  category: Categories | string
): Promise<Array<ProductItem>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(shopDB.filter((item) => item.category === category));
    }, 2000);
  });
};

export const getProductById = async (
  id: number
): Promise<ProductItem | undefined> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(shopDB.find((item) => item.id === id));
    }, 2000);
  });
};

export default shopDB;
