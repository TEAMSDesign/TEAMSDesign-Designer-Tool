import React from 'react';
import { createBoard } from '@wixc3/react-board';
import DesignerToolContainer from '../../../components/DesignerToolContainer';

export default createBoard({
    name: 'DesignerToolContainer',
    Board: () => <DesignerToolContainer />,
    isSnippet: true,
});