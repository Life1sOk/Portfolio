import React from "react";

import { tierOne, tierTwo, tierThree } from "../../utils/tools-icons";

import Title from "../../ui/title/title.component";
import Icon from "../../components/icon-wrap/icon-wrap.component";

import { SkillSetStyle, BasicsContainer, FrameworksContainer } from './skill-set.style';

const SkillSetContainer = () => {
    return (
        <SkillSetStyle>
            <Title number={2}>Skill sets</Title>
            <BasicsContainer>
                {
                    tierOne.map((tool, index) => <Icon name={tool.name} time={tool.time} icon={tool.icon} key={index} />)
                }
            </BasicsContainer>
            <FrameworksContainer>
                {
                    tierTwo.map((tool, index) => <Icon name={tool.name} time={tool.time} icon={tool.icon} key={index} />)
                }
            </FrameworksContainer>
            <BasicsContainer>
                {
                    tierThree.map((tool, index) => <Icon name={tool.name} time={tool.time} icon={tool.icon} key={index} />)
                }
            </BasicsContainer>
        </SkillSetStyle>
    )
};

export default SkillSetContainer;