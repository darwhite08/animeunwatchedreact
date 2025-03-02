import React from "react";
import styled from 'styled-components';
import HeroSectionComp from "./hero/hero_section";
import ReccomendationSection from "../../reccomendation/main";
import { ExploreAnimeCard } from "./landing_comp/main";
import Cta from "./cta/main";

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    --color: #E1E1E1;
    background-color: #F3F3F3;
    background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
        linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
    background-size: 55px 55px;
  }
`;

function HeroMainPage(params) {
    return (
        <StyledWrapper>
        <div className="container">
            <HeroSectionComp />
            <ExploreAnimeCard />
            <Cta/>
        </div>
        </StyledWrapper>
    );
}

export default HeroMainPage;