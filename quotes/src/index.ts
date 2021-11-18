export type Quote = {
  text: string;
  author: string;
  foo?: boolean;
};

export const getQuotes = async (): Promise<Quote[]> => {
  const response = await fetch('https://type.fit/api/quotes');

  return response.json();
};
