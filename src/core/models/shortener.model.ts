export interface ShortenerRequestResponse {
  archived: boolean;
  created_at: string;
  custom_bitlinks: string[];
  deeplinks: string[];
  id: string;
  link: string;
  short_url: string;
  long_url: string;
  references: {
    group: string;
  };
  tags: string[];
}
