import React from 'react';
import styled from '@emotion/styled';
import { font7 } from '../../assets/globalStyles';

const Heading = styled('h1')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #002c9b;
    text-transform: capitalize;
`;
export default function PostTitle({ children }) {
    return (
        <div className="mt-10 m-10">
            <Heading> {children}</Heading>
        </div>
    );
}
