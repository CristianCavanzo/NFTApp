import { Title } from '@components/title/Title';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
`;

const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    column-gap: 8px;
    figure:last-child img {
        border-radius: 50%;
        width: 24px;
        height: 24px;
    }
`;

const Imgs = styled.figure`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
        object-fit: cover;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>NFT Base</Title>
            <SectionContainer>
                <Imgs>
                    <img src="/icons/bell.svg" alt="" />
                </Imgs>
                <Imgs>
                    <img src="/img/profile.png" alt="" />
                </Imgs>
            </SectionContainer>
        </HeaderContainer>
    );
};

export default Header;
