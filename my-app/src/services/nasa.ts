import axios from 'axios';

export interface PictureOfTheDayModel {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
}

export const getNASAData = async (): Promise<PictureOfTheDayModel> => {
  const response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=C4yAMp4Nna97Iyyq6FaHNTtQ8vAbN5Qpid0Zd4Eb`
  );
  return response.data;
};
