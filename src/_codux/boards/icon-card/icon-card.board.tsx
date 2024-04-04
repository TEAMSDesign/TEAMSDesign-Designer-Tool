import React from 'react';
import { createBoard } from '@wixc3/react-board';
import IconCard from '../../../test-components/icon-card/IconCard';

export default createBoard({
    name: 'IconCard',
    Board: () => <IconCard />,
    isSnippet: true,
});