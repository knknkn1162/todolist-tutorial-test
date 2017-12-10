import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HELLO } from './components/Hello';

ReactDOM.render(
    <HELLO compiler="TypeScript" framework="React" />,
    document.getElementById('example'),
);
