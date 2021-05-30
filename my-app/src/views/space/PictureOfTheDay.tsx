import React from 'react';

interface Props {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
}

const PictureOfTheDay: React.FC<Props> = ({
  copyright,
  date,
  explanation,
  hdurl,
}) => {
  return (
    <div>
      <p>{copyright}</p>
      <p>{date}</p>
      <p>{explanation}</p>
      <img src={hdurl} width="30%" height="30%" alt="" />
    </div>
  );
};

export default PictureOfTheDay;
