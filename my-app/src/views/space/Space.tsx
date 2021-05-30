import React, { useState } from "react";
import PictureOfTheDay from "./PictureOfTheDay";
import SpaceXLastMission from "./SpaceXLastMission";
import { getNASAData, PictureOfTheDayModel } from "../../services/nasa";
import { getSpaceXData, SpaceXLastMissionModel } from "../../services/spaceX";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import NavPanel from "../../components/NavPanel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonGen: {
    fontWeight: "bold",
    margin: "5px",
  },
  bodyStyle: {
    fontFamily: "Roboto, sans-serif",
  },
});

enum Service {
  NASA = "NASA",
  spaceX = "SPACEX",
}

const Space = () => {
  const [inputValue, setInputValue] = useState<Service>(Service.NASA);
  const [pictureOfTheDay, setPictureOfTheDay] = useState<PictureOfTheDayModel>({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
  });
  const [spacexLastMission, setSpacexLastMission] =
    useState<SpaceXLastMissionModel>({
      name: "",
      details: "",
      flightNumber: 0,
      dateUnix: 0,
      webcast: "",
    });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInputValue(event.target.value as Service);
  };

  const newData = () => {
    if (inputValue === Service.NASA) {
      getNASAData().then((pictureOfTheDay) => {
        setPictureOfTheDay({
          copyright: pictureOfTheDay.copyright,
          date: pictureOfTheDay.date,
          explanation: pictureOfTheDay.explanation,
          hdurl: pictureOfTheDay.hdurl,
        });
      });
    }
    if (inputValue === Service.spaceX) {
      getSpaceXData().then((spacexLastMission) => {
        setSpacexLastMission({
          name: spacexLastMission.name,
          details: spacexLastMission.details,
          flightNumber: spacexLastMission.flightNumber,
          dateUnix: spacexLastMission.dateUnix,
          webcast: spacexLastMission.webcast,
        });
      });
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.bodyStyle}>
      <NavPanel />
      <h1>
        <u>SPACE DATA</u>
      </h1>
      <FormControl>
        <InputLabel>source</InputLabel>
        <Select value={inputValue} onChange={handleChange}>
          <MenuItem value={Service.NASA}>NASA Picture of the day</MenuItem>
          <MenuItem value={Service.spaceX}>SpaceX Latest Mission</MenuItem>
        </Select>
        <FormHelperText>Please select data source</FormHelperText>
      </FormControl>
      <br />
      <Button
        className={classes.buttonGen}
        variant="contained"
        color="primary"
        onClick={newData}
      >
        Generate
      </Button>
      <br />
      <br />
      {inputValue === Service.NASA && pictureOfTheDay.date !== "" && (
        <PictureOfTheDay
          copyright={pictureOfTheDay.copyright}
          date={pictureOfTheDay.date}
          explanation={pictureOfTheDay.explanation}
          hdurl={pictureOfTheDay.hdurl}
        />
      )}{" "}
      {inputValue === Service.spaceX && spacexLastMission.name !== "" && (
        <SpaceXLastMission
          name={spacexLastMission.name}
          details={spacexLastMission.details}
          flightNumber={spacexLastMission.flightNumber}
          dateUnix={spacexLastMission.dateUnix}
          webcast={spacexLastMission.webcast}
        />
      )}
    </div>
  );
};
export default Space;
