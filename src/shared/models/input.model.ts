import { InputSize, InputType, InputTypes } from "../enums/input.enum";

const unnamedButton: string = "unnamed";
export class BaseInput {
  constructor(
    public label: string,
    public type: InputTypes,
    public id?: string | undefined,
    public value?: string | undefined,
    public placeholder?: string,
    public labelLeft?: string,
    public size?: InputSize,
    public customSize?: string,
    public readOnly?: boolean,
    public disabled?: boolean,
    public required?: boolean,
    public tabIndex?: number,
    public clearable?: boolean,
    public onFocus?: any,
    public onBlur?: any,
    public onChange?: any,
    public onDelete?: any,
    public error?: string
  ) {}
}

export class BaseInputHelper {
  static mapObject(object: BaseInput, t: any): BaseInput {
    return new BaseInput(
      object.label && object.label.length > 0 ? object.label : unnamedButton,
      object.type ?? InputType.text,
      object.id ?? object.label.trim().toLowerCase(),
      object.value ?? "",
      object.placeholder ?? "...",
      object.labelLeft ?? "",
      object.size ?? InputSize.medium,
      object.customSize ?? undefined,
      object.readOnly ?? false,
      object.disabled ?? false,
      object.required ?? false,
      object.tabIndex ?? 0,
      object.clearable ?? false,
      object.onFocus,
      object.onBlur,
      object.onChange,
      object.onDelete,
      object.required ? t("app.errors.required") : object.error ?? ""
    );
  }
}
