import React, { Component } from 'react';

// パクった
// https://qiita.com/pullphone/items/1b4f4f1c973d9b9342aa

class Canvas extends Component {

    constructor() {
        super();
        this.state = { touch: false };
    }

    getContext() {
        return this.refs.canvas.getContext("2d");
    }

    begin(x, y) {
        this.setState({ touch: true });
        const context = this.getContext();
        context.strokeStyle = "#09d3ac";
        context.moveTo(x, y);
    }

    end() {
        this.setState({ touch: false });
    }

    draw(x, y) {
        if (!this.state.touch) {
            return;
        }

        const context = this.getContext();
        context.lineTo(x, y);
        context.stroke();
    }

    render() {
        return (
            <canvas
                className="App-canvas"
                ref="canvas"
                width="512"
                height="512"
                onMouseDown={e => this.begin(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                onMouseUp={() => this.end()}
                onMouseEnter={() => this.end()}
                onMouseLeave={() => this.end()}
                onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
            />
        )
    }

}

export default Canvas;
