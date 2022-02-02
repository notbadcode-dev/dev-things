import { InputTextType, InputType, InputTypes } from "../enums/input.model";

const unnamedButton: string = "unnamed";

export class BaseInput {
  constructor(
    public label: string,
    public type: InputTypes,
    public textType?: InputTextType,
    public id?: string | undefined,
    public value?: string | number | readonly string[] | undefined,
    public placeholder?: string,
    public readOnly?: boolean,
    public disabled?: boolean,
    public onFocus?: any,
    public onBlur?: any
  ) {}
}

export class BaseInputHelper {
  static mapObject(object: BaseInput): BaseInput {
    return new BaseInput(
      object.label && object.label.length > 0 ? object.label : unnamedButton,
      object.type ?? InputType.text,
      object.textType,
      object.id ?? object.label.trim().toLowerCase(),
      object.value ?? "",
      object.placeholder ?? object.label ?? unnamedButton,
      object.readOnly ?? false,
      object.disabled ?? false,
      object.onFocus,
      object.disabled
    );
  }
}
