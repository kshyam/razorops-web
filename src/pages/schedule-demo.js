import React from 'react';
import { InlineWidget } from 'react-calendly';
import Container from '../components/container';

export default function Product() {
    return (
        <Container>
            <InlineWidget url="https://calendly.com/razorops/demo" />
        </Container>
    );
}
