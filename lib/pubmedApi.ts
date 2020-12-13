// List of publications in JSON format
export const getPubIds = async (authorName: string) => {
  const req = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=100000&term=${authorName}[Full Author Name]&retmode=json&sort=pub+dat`;
  const res = await fetch(req).then((res) => res.json());
  const data: Array<any> = await res.esearchresult.idlist;
  console.log("RES IDS", res);
  return data;
};

export const getPublications = async (ids) => {
  const req = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=100000&term=31362766,31355632&retmode=json&sort=pub+dat`;
  const res = await fetch(req).then((res) => {
    console.log("RES PUB", res);
  });

  const data = null;

  return data;
};
