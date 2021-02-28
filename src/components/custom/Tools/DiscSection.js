import React from "react";
import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";

const BulletComponent = ({ children }) => (
  <li>
    <Text align="left" gutterBottom={0.5}>
      {children}
    </Text>
  </li>
);

const DiscSection = (props) => {
  return (
    <Section {...props}>
      <div>
        <img
          src="img/everything_disc.jpg"
          alt=""
          style={{ maxWidth: "350px" }}
        />
      </div>
      <Text>
        Everything DiSC is a simple profiling tool based on 4 DiSC styles and
        useful for understanding your motivators and stressors. The profile also
        includes strategies for working with people with different styles, and
        tips to increase your workplace effectiveness. A range of profiles are
        available, each one focuses on a specific context to help you improve in
        that area:
      </Text>
      <ul>
        <BulletComponent>Workplace Profile </BulletComponent>
        <BulletComponent>Productive Conflict Profile</BulletComponent>
        <BulletComponent>Management Profile</BulletComponent>
        <BulletComponent>Work of Leaders Profile</BulletComponent>
        <BulletComponent>Group Culture Report</BulletComponent>
      </ul>

      <Text>Contact me here to talk about DiSC</Text>
    </Section>
  );
};

export default DiscSection;
