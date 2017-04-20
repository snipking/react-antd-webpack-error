import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Button from 'antd/lib/button';
// import './styles/app.css';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Button type="primary">Button</Button>
    </div>,
    document.getElementById("rootElement")
);
