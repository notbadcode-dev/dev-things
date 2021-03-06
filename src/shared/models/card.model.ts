import { IIcon } from "./icon.model";

export interface ICard {
  id: string;
  icon: IIcon;
  route: string;
  title: string;
  description: string;
}
