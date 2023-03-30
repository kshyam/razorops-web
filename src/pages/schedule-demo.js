import React from 'react';
import { InlineWidget } from 'react-calendly';
import PageHead from '../components/common/page-head';
import Container from '../components/container';

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Schedule Demo',
                description: 'Razorops demo with Shyam'
            }}
        />
    );
};

export default function Product() {
    return (
        <Container>
            <InlineWidget url="https://calendly.com/razorops/demo" />
        </Container>
    );
}
