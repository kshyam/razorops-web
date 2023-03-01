import * as React from 'react';
import FrequentlyAskedQuestions from '../common/frequently-asked-questions';

const content = [
    {
        id: 1,
        title: 'Q. How do I get started?',
        sub: 'Getting started with Razorops is easy, you can have a look quick look on <a style="text-decoration: underline;" href="https://docs.razorops.com/getting_started/"> Documents </a> and signup for razorops.<br><br>1. <a style="text-decoration: underline;" href="https://dashboard.razorops.com/users/sign_in"> Signup </a> Razorops, Create your first Pipeline project<br>2. Add .razorops.yaml to your source code root directory<br>3. Define your Pipeline <a style="text-decoration: underline;" href="https://docs.razorops.com/config/spec/"> (Click here to Learn) </a><br>4. Commit and push your source code<br>5. This new commit will trigger your pipeline<br>6. Still need help <a style="text-decoration: underline;" href="https://razorops.com/schedule-demo"> Schedule a Demo </a>'
    },
    {
        id: 2,
        title: 'Q. Which source code management services are supported?',
        sub: 'Razorops supports major code-hosting services like GitHub, Bitbucket and Gitlab'
    },
    {
        id: 3,
        title: 'Q. How do you handle upgrading or canceling a subscription?',
        sub: 'You can change or cancel your subscription at any time from your dashboard.'
    },
    {
        id: 4,
        title: 'Q. Do your have something custom plan?',
        sub: 'Most of our customers find Razorops SAAS environment covers their usecases. if you need extra support, hosting preferences or features, our support team will help you.'
    },
    {
        id: 5,
        title: 'Q. I have more questions ?',
        sub: 'Most of our customers find Razorops SAAS environment covers their usecases. if you need extra support, hosting preferences or features, our support team will help you.'
    }
];

export default function FrequentlyAsked() {
    return <FrequentlyAskedQuestions content={content} />;
}
