export interface IInfons {
  journal: string;
  year: string;
  "article-id_pmc": string;
  type: string;
  authors: string;
  section: string;
}

export interface IPublication {
  id: string;
  passages: [{ infons: IInfons; text: string }];
  authors: Array<string>;
  journal: string;
  pmid: number;
}
