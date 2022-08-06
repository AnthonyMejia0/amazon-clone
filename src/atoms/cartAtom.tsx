import { atom, selector } from "recoil";

export interface cartItem {
  title: string;
  price: number;
  rating: number;
  img: string;
}

export const cartState = atom({
  key: "cartState",
  default: [] as cartItem[],
});

export const cartTotalState = selector({
  key: "cartTotalState",
  get: ({ get }) => {
    const cart = get(cartState);
    let sum: number = 0;

    cart.forEach((item) => {
      sum += item.price;
    });

    return sum;
  },
});
