import React, { SyntheticEvent } from 'react';
import Input from './Input';

import { storiesOf } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

export default {
    title: 'Components Library/Button',
    component: Input,
    argTypes: {

    },
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'orange', value: '#00f' },
            ],
        },
    },
} as ComponentMeta<typeof Input>;



const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />

const onChange = (e: SyntheticEvent) => {
    console.log(e.target.value)
}

export const InputFirst: ComponentStory<typeof Input> = InputTemplate.bind({});
// InputFirst.args = { onChange: onChange };


InputFirst.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole('textbox'), 'email@provider.com', {
        delay: 100,
    });

    canvas.findAllByRole(Input)

};





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

