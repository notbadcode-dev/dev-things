import { IIcon } from "./icon.model";

export interface ICard {
  id: number;
  icon: IIcon;
  route: string;
  title: string;
  description: string;
}
