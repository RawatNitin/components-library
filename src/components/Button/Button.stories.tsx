import React from 'react';
import Button from './index';

import { storiesOf } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components Library/Button',
    component: Button,
    argTypes: {
        asdasdasdasd: ['a', 'b', 'c']
    },
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof Button>;


export const Primary: ComponentStory<typeof Button> = () => <Button label='primary' />
Primary.storyName = 'I am the primary';
export const Secondary: ComponentStory<typeof Button> = () => <Button label='secondary' />

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const TER: ComponentStory<typeof Button> = ButtonTemplate.bind({});
TER.args = { label: 'Button' };





// const stories = storiesOf('My Button Stories', module);

// stories.add('button ', () => {
//     return <Button label='asdasd' />
// })
// stories.add('second ', () => {
//     return <Button label='second' />
// })
// stories.add('third ', () => {
//     return <Button label='third' />
// })

