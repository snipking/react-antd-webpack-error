import * as React from "react";

export interface ClockProps { }

export interface ClockState { date: Date;}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Clock extends React.Component<ClockProps, ClockState> {
    timerID: number;

    constructor(props: ClockProps) {
        super(props);
        this.state = {date: new Date()};
      }

    render() {
        return <h1>It is {this.state.date.toLocaleTimeString()} now.</h1>;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}
