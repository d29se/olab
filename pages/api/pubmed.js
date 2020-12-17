const axios = require("axios");

const getAnthonysPublicationsIds = async () => {
  try {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=100000&term=O'Donoghue+Anthony+J[Full Author Name]&retmode=json&sort=pub+dat`;
    const response = await axios.get(url);
    return response.data.esearchresult.idlist;
  } catch {
    return null;
  }
};

const getAnthonysPublications = async () => {
  try {
    const AnthonysPublicationsIds = await getAnthonysPublicationsIds();
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmax=100000&id=${AnthonysPublicationsIds.join()}&retmode=json`;
    const response = await axios.get(url);
    return response.data.result;
  } catch {
    return null;
  }
};

export const parsedData = () =>
  getAnthonysPublications().then((data) => {
    try {
      let valuesOnly = [];
      for (const [key, value] of Object.entries(data)) {
        key !== "uids" ? valuesOnly.push(value) : null;
      }
      return valuesOnly.reverse();
    } catch {
      return null;
    }
  });
