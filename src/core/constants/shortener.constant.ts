export class SHORTENER {
  public static ALLOWED_PROTOCOL = "https://";

  public static ENDPOINT = "https://t.ly/api/v1/link/shorten";
  public static HEADERS = {
    "Content-Type": "application/json",
  };
}
