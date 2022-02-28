export enum InputType {
  button = "button",
  checkbox = "checkbox",
  color = "color",
  date = "date",
  datetimeLocal = "datetime-local",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  month = "month",
  number = "number",
  password = "password",
  radio = "radio",
  range = "range",
  reset = "reset",
  search = "search",
  submit = "submit",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  week = "week",
}

export enum InputSize {
  xsmall = "xs",
  small = "sm",
  medium = "md",
  large = "lg",
  xlarge = "xl",
}

export enum InputTextType {
  input = "input",
  textarea = "textarea",
}

export enum InputEventType {
  focus = "focus",
  blur = "blur",
  change = "change",
}

export type InputSizes =
  | InputSize.xsmall
  | InputSize.small
  | InputSize.medium
  | InputSize.large
  | InputSize.xlarge;

export type InputTypes =
  | InputType.button
  | InputType.checkbox
  | InputType.color
  | InputType.date
  | InputType.datetimeLocal
  | InputType.email
  | InputType.file
  | InputType.hidden
  | InputType.image
  | InputType.month
  | InputType.number
  | InputType.password
  | InputType.radio
  | InputType.range
  | InputType.reset
  | InputType.search
  | InputType.submit
  | InputType.tel
  | InputType.text
  | InputType.time
  | InputType.url
  | InputType.week;

export type InputTextTypes = InputTextType.input | InputTextType.textarea;
