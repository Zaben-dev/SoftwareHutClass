import axios from 'axios';

export interface SpaceXLastMissionModel {
  name: string;
  details: string;
  flightNumber: number;
  dateUnix: number;
  webcast: string;
}

export const getSpaceXData = async (): Promise<SpaceXLastMissionModel> => {
  const response = await axios.get(
    `https://api.spacexdata.com/v4/launches/latest`
  );
  return {
    name: response.data.name,
    details: response.data.details,
    flightNumber: +response.data.flight_number,
    dateUnix: +response.data.date_unix,
    webcast: response.data.links.webcast,
  };
};
