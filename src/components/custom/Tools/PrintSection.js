import React from "react";
import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";

const Print = (props) => {
  return (
    <Section {...props}>
      <br />
      <br />
      <div>
        <img src="img/print_logo_small2.png" alt="" />
      </div>

      <Text>
        I am a licensed practitioner/coach in The Why of you Powered by PRINT®,
        a breakthrough model of human motivation and behavior that was developed
        by The Paul Hertz Group.
      </Text>
      <Text>
        The approach is used to enhance understanding of the way people react
        and how they relate by explaining the “why” behind their behavior – why
        people act as they do, why they make certain choices, why they are
        attracted to certain things and why they function better in certain
        situations than others.
      </Text>
      <Text>
        Everyone has core motivations that drive their actions and behaviors.
        PRINT® reveals what these motivators are and in doing so, clarifies what
        is needed to bring out people’s best. It helps unleash the potential
        that lies within all people. PRINT® is a valuable guide to create
        success and reveal what can be done to face and overcome one’s
        challenges. PRINT® builds insight into others, as well as one’s self.
      </Text>
      <Text>
        There are 72 PRINTS®, each with their own core motivations and
        behaviors. No PRINT® is better than any other and each possesses its own
        natural gifts and contributions (Best Self) and its own potential
        barriers and obstacles (Shadow).
      </Text>
      <Text>
        Every PRINT® exhibits Best Self and Shadow behavior. The goal of the Why
        of you program is to teach people how to diminish the frequency of
        Shadow behavior and increase the presence of Best Self. Shadow is
        people’s automatic response to the stressors in their lives. It may be
        more automatic for some people to be in Best Self or Shadow than others.
        A person’s professional and personal environment plays a role, as well
        as their level of self-awareness. Studies have shown there is a positive
        correlation between Best Self and performance.
      </Text>
      <Text>
        I am certified to use and analyze the Paul Hertz Group’s PRINT® Survey,
        a 10-15 minute, statistically validated, highly accurate, and dynamic
        online instrument as part of my coaching process (dynamic meaning that
        different questions come up based on how previous ones were answered, so
        people take different surveys). The instrument helps me uncover an
        individual’s core motivators and the behaviors that reflect both their
        Best Self and their potential Shadow. This information helps me work in
        partnership with individuals to efficiently accomplish goals and
        generate strategies to yield desired results.
      </Text>
      <Text>
        Knowing “why” accelerates successful growth and transformation. PRINT®
        provides this vital information.
      </Text>
      <Text>
        You may also wish to find out more about PRINT by watching this short
        YouTube video:
      </Text>
      <iframe
        width="560"
        height="315"
        frameborder="0"
        title="print_yt_video"
        src="https://www.youtube.com/embed/FGgDw5GnAic"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <br />

      <Text>Contact me here to discuss PRINT® profiling</Text>
    </Section>
  );
};

export default Print;
