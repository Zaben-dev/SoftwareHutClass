import React from 'react';

interface Props {
  name: string;
  details: string;
  flightNumber: number;
  dateUnix: number;
  webcast: string;
}

const PictureOfTheDay: React.FC<Props> = ({
  name,
  details,
  flightNumber,
  dateUnix,
  webcast,
}) => {
  const date = new Date(dateUnix * 1000).toString();
  return (
    <div>
      <p>name: {name}</p>
      <p>details: {details}</p>
      <p>flight number: {flightNumber}</p>
      <p>date: {date}</p>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${webcast.substring(17)}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default PictureOfTheDay;
