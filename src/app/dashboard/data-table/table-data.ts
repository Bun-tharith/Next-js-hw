export type Products = {
  id: string;
  images: string[];
  title: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
};