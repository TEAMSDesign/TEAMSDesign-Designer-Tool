import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconCardTest } from '../../../test-components/icon-card-test/icon-card-test';

export default createBoard({
    name: 'IconCardTest',
    Board: () => <IconCardTest />,
    isSnippet: true,
    environmentProps: {
canvasWidth: 245,
canvasHeight: 377
}
});