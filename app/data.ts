export type ImageType = {
  thumbnail: string;
  mobile: string;
  tablet?: string;
  desktop?: string;
};

export type DataType = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: ImageType;
};

export const data: DataType[] = [
  {
    id: 1,
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    image: {
      thumbnail: "/assets/images/image-waffle-thumbnail.jpg",
      mobile: "/assets/images/image-waffle-mobile.jpg",
      tablet: "/assets/images/image-waffle-tablet.jpg",
      desktop: "/assets/images/image-waffle-desktop.jpg",
    },
  },

  {
    id: 2,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    image: {
      thumbnail: "/assets/images/image-macaron-thumbnail.jpg",
      mobile: "/assets/images/image-macaron-mobile.jpg",
      tablet: "/assets/images/image-macaron-tablet.jpg",
      desktop: "/assets/images/image-macaron-desktop.jpg",
    },
  },
  {
    id: 3,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    image: {
      thumbnail: "/assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "/assets/images/image-tiramisu-mobile.jpg",
      tablet: "/assets/images/image-tiramisu-tablet.jpg",
      desktop: "/assets/images/image-tiramisu-desktop.jpg",
    },
  },
  {
    id: 4,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    image: {
      thumbnail: "/assets/images/image-baklava-thumbnail.jpg",
      mobile: "/assets/images/image-baklava-mobile.jpg",
      tablet: "/assets/images/image-baklava-tablet.jpg",
      desktop: "/assets/images/image-baklava-desktop.jpg",
    },
  },
  {
    id: 5,
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    image: {
      thumbnail: "/assets/images/image-meringue-thumbnail.jpg",
      mobile: "/assets/images/image-meringue-mobile.jpg",
      tablet: "/assets/images/image-meringue-tablet.jpg",
      desktop: "/assets/images/image-meringue-desktop.jpg",
    },
  },
  {
    id: 6,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 3.5,
    image: {
      thumbnail: "/assets/images/image-cake-thumbnail.jpg",
      mobile: "/assets/images/image-cake-mobile.jpg",
      tablet: "/assets/images/image-cake-tablet.jpg",
      desktop: "/assets/images/image-cake-desktop.jpg",
    },
  },
  {
    id: 7,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    image: {
      thumbnail: "/assets/images/image-brownie-thumbnail.jpg",
      mobile: "/assets/images/image-brownie-mobile.jpg",
      tablet: "/assets/images/image-brownie-tablet.jpg",
      desktop: "/assets/images/image-brownie-desktop.jpg",
    },
  },
  {
    id: 8,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    image: {
      thumbnail: "/assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "/assets/images/image-panna-cotta-mobile.jpg",
      tablet: "/assets/images/image-panna-cotta-tablet.jpg",
      desktop: "/assets/images/image-panna-cotta-desktop.jpg",
    },
  },
];
