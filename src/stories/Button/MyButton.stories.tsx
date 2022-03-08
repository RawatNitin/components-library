import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../../components';

const stories = storiesOf('My Button Stories', module);

stories.add('My Button', () => {
    return (<Button label='label' />)
})
