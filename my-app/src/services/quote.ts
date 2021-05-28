import axios from "axios";

interface Quote {
  content: string;
  author: string;
}

export enum Tag {
  FamousQuotes = "famous-quotes",
  Wisdom = "wisdom",
  Inspirational = "inspirational",
  Friendship = "friendship",
  Technology = "technology",
}

export const getQuote = async (tag: Tag): Promise<Quote> => {
  const response = await axios.get(
    `https://api.quotable.io/random?tags=${tag}`
  );
  return response.data;
};
