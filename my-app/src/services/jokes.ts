import axios from 'axios';

interface Joke {
  type: string;
  setup: string;
  punchline: string;
}

export enum Category {
  General = 'general',
  Programming = 'programming',
}

export const getJoke = async (category: Category): Promise<Joke> => {
  const response = await axios.get(
    `https://official-joke-api.appspot.com/jokes/${category}/random`
  );
  return response.data[0];
};
