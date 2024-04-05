import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ImageCard } from '../../../test-components/image-card/image-card';

export default createBoard({
    name: 'ImageCard',
    Board: () => <ImageCard />,
    isSnippet: true,
});