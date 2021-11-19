const apiBase = 'https://api.quotable.io';

export type Quote = {
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

export const getQuote = async ({ id }: { id: string }): Promise<Quote> => {
  const response = await fetch(`${apiBase}/quotes/${id}`);
  return response.json();
};
