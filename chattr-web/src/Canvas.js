import React from 'react';

import Measure from "react-measure"
import connect from "react-redux"

// パクった
// https://qiita.com/pullphone/items/1b4f4f1c973d9b9342aa

class Canvas extends React.Component {

    constructor() {
        super();
        this.state = { touching: false };
    }

    getContext() {
        return this.refs.canvas.getContext("2d");
    }

    startDrawing(x, y) {
        this.setState({ touching: true });
        const context = this.getContext();
        context.strokeStyle = "#09d3ac";
        context.moveTo(x, y);
    }

    draw(x, y) {
        if (!this.state.touching) {
            return;
        }

        const context = this.getContext();
        context.lineTo(x, y);
        context.stroke();
    }

    endDrawing() {
        this.setState({ touching: false });
    }

    render() {
        return (
            <Measure onMeasure={({width, height}) => dispatch}>
                <canvas
                    className="App-canvas"
                    ref="canvas"
                    width={({width})}
                    height={({height})}
                    onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                    onMouseUp={() => this.endDrawing()}
                    onMouseEnter={() => this.endDrawing()}
                    onMouseLeave={() => this.endDrawing()}
                    onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                />
            </Measure>
        )
    }

}

export default Canvas;
