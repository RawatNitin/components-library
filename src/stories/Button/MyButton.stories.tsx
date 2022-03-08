import React from 'react';
import { Button } from '../..';

import { storiesOf } from '@storybook/react';


const stories = storiesOf('My Button Stories', module);

stories.add('button ', () => {
    return <Button label='asdasd' />
})