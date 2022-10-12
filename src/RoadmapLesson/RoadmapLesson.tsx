import React from "react";
import { LessonSection } from "models";
import { LessonContainer } from "./RoadmapLesson.styled";
import Button from "atoms/Button/Button";

interface RoadmapLessonProps {
  sections: LessonSection[];
}
const RoadmapLesson: React.FC<RoadmapLessonProps> = ({ sections }) => {
  return (
    <LessonContainer>
      {sections.map((section, i) => (
        <>
          {section.description && <p>{section.description}</p>}
          <a href={section.url}>
            <Button variant="primary">{section.urlLabel}</Button>
          </a>
        </>
      ))}
    </LessonContainer>
  );
};

export default RoadmapLesson;
