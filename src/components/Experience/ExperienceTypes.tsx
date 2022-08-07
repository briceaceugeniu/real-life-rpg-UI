import { Button, Tab, Tabs } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import React from "react";
import ProfessionalExperience from "./ProfessionalExperience";
import SoftSkillExperience from "./SoftSkillExperience";
import FitnessExperience from "./FitnessExperience";

const ExperienceTypes = () => {
  const [value, setValue] = React.useState(0);
  const [selTab, setSelTab] = React.useState("prof");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabClick = (tab: string) => {
    setSelTab(tab);
  };

  const expTypes: any = [];
  expTypes["prof"] = <ProfessionalExperience />;
  expTypes["soft_skill"] = <SoftSkillExperience />;
  expTypes["fitness"] = <FitnessExperience />;

  return (
    <div style={{ position: "relative" }}>
      <Tabs
        centered
        textColor={`secondary`}
        value={value}
        onChange={handleChange}
      >
        <Tab
          onClick={() => handleTabClick("prof")}
          icon={<CodeIcon />}
          label="Professional"
        />
        <Tab
          onClick={() => handleTabClick("soft_skill")}
          icon={<AddReactionIcon />}
          label="Soft Skill"
        />
        <Tab
          onClick={() => handleTabClick("fitness")}
          icon={<FitnessCenterIcon />}
          label="Fitness"
        />
      </Tabs>
      <div>{expTypes[selTab]}</div>
      <Button sx={{ margin: 1, minWidth: 120 }} variant="contained">
        Save
      </Button>
    </div>
  );
};

export default ExperienceTypes;