export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Men's Collection",
    href: "/shop/mens-collection",
    description:
      "Discover our latest collection of men's clothing, featuring modern styles and timeless pieces.",
  },
  {
    title: "Women's Collection",
    href: "/shop/womens-collection",
    description:
      "Explore our exclusive range of women's apparel, perfect for any occasion.",
  },
  {
    title: "Kids' Corner",
    href: "/shop/kids-corner",
    description:
      "Trendy and comfortable clothing for kids, designed for play and everyday adventures.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description:
      "Complete your look with our stylish accessories, from bags to hats and more.",
  },
  {
    title: "Shoes",
    href: "/shop/shoes",
    description:
      "Step into comfort and style with our collection of shoes for every season.",
  },
  {
    title: "Sale",
    href: "/shop/sale",
    description:
      "Grab the best deals on your favorite items with our ongoing sales and special offers.",
  },
];

export const sss: {
  id: string;
  title: string;
  description: string;
}[] = [
  {
    id: "item- 1",
    title: "Konumumuz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-2",
    title: "İletişim Bilgileri",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-3",
    title: "Çalışma Saatlerimiz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-4",
    title: "Hizmetlerimiz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "item-5",
    title: "Sık Sorulan Sorular",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const carousels: {
  id: number;
  image: string;
}[] = [
  {
    id: 1,
    image: "/slider/5.jpg",
  },
  {
    id: 2,
    image: "/slider/6.jpg",
  },
  {
    id: 3,
    image: "/slider/7.jpg",
  },
];

export interface Products {
  id: number;
  title: string;
  price: number;
  mrp: number;
  image: string;
  description: string;
}
export const products: Products[] = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    mrp: 150,
    image: "/products/1.jpg",
    description: "Product 1 description",
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    mrp: 250,
    image: "/products/2.jpg",
    description: "Product 2 description",
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    mrp: 350,
    image: "/products/3.jpg",
    description: "Product 3 description",
  },
  {
    id: 4,
    title: "Product 4",
    price: 400,
    mrp: 450,
    image: "/products/4.jpg",
    description: "Product 4 description",
  },
  {
    id: 5,
    title: "Product 5",
    price: 500,
    mrp: 550,
    image: "/products/5.jpg",
    description: "Product 5 description",
  },
  {
    id: 6,
    title: "Product 6",
    price: 600,
    mrp: 650,
    image: "/products/6.jpg",
    description: "Product 6 description",
  },
  {
    id: 7,
    title: "Product 7",
    price: 700,
    mrp: 750,
    image: "/products/7.jpg",
    description: "Product 7 description",
  },
  {
    id: 8,
    title: "Product 8",
    price: 800,
    mrp: 850,
    image: "/products/8.jpg",
    description: "Product 8 description",
  },
  {
    id: 9,
    title: "Product 9",
    price: 900,
    mrp: 950,
    image: "/products/9.jpg",
    description: "Product 9 description",
  },
  {
    id: 10,
    title: "Product 10",
    price: 1000,
    mrp: 1050,
    image: "/products/10.jpg",
    description: "Product 10 description",
  },
];
