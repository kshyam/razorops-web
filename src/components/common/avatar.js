import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { font1 } from '../../assets/globalStyles';

const Name = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #5b5b5b;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 27px;
    }
`;
export default function Avatar({ name, picture }) {
    return (
        <div className="flex items-center">
            <GatsbyImage
                style={{ borderRadius: '10px' }}
                image={picture?.gatsbyImageData}
                className="w-12 h-12 rounded-full mr-4"
                alt={`Photo of ${name}`}
            />
            <Name>{name}</Name>
        </div>
    );
}
