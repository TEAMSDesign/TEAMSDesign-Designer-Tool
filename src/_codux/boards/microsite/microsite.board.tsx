import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Microsite from '../../../components/Microsite';

export default createBoard({
    name: 'Microsite',
    Board: () => <Microsite />,
    isSnippet: true,
    environmentProps: {
windowHeight: 878,
canvasHeight: 9774,
windowWidth: 1352,
canvasWidth: 1032
}
});