import React from 'react';
import styled from 'styled-components';

const TitleComponent = styled.h2`
    font: var(--title);
`;

const Title = ({ children }) => {
    return <TitleComponent>{children}</TitleComponent>;
};

export { Title };
