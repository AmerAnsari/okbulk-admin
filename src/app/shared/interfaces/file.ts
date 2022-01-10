export interface File {
  id: string;
  filename: string;
  file: string;
  ext: string;
  size: string;
  kind: number;
  size_human: string;
  get_kind_display: string;
  created: string;
  updated: string;
}
