const apiBase = 'https://api.quotable.io';

type Quote = {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export const getRandomQuote = async (): Promise<Quote> => {
  const response = await fetch(`${apiBase}/random`);

  return response.json();
};
