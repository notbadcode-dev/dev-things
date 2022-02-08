import { ReactElement } from "react";
import { ButtonColor, ButtonType } from "../enums/button.enum";

const unnamedButton: string = "unnamed";

export class Button {
  constructor(
    public label: string,
    public color:
      | ButtonColor.primary
      | ButtonColor.secondary
      | ButtonColor.danger,
    public onPress: any,
    public title?: string,
    public type?:
      | ButtonType.button
      | ButtonType.submit
      | ButtonType.reset
      | undefined,
    public className?: string,
    public tabIndex?: number,
    public accesKey?: string,
    public disabled?: boolean,
    public disable?: any,
    public icon?: ReactElement<any, any>
  ) {}
}

export class ButtonHelper {
  static mapObject(object: Button): Button {
    return new Button(
      object.label && object.label.length > 0 ? object.label : unnamedButton,
      object.color ?? ButtonColor.primary,
      object.onPress,
      object.title ?? object.label ?? unnamedButton,
      object.type ?? ButtonType.button,
      object.className ?? "",
      object.tabIndex ?? -1,
      object.accesKey,
      object.disabled ?? false,
      object.disable ?? undefined,
      object.icon ?? undefined
    );
  }
}
