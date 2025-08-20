import { React, useRef, useEffect, useState } from 'react';
import { Rect, Canvas } from 'fabric';
import { IconButton } from "blocksin-system";
import { SquareIcon } from "sebikostudio-icons";
import Settings from "../modules/Settings";
import '../styles/MakeDiaryPage.css'

function MakeDiaryPage() {

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            });

            initCanvas.backgroundColor = '#fff';
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            };
        }

    }, []);

    const addRect = () => {
        if (canvas) {
            const rect = new Rect({
                width: 100,
                height: 100,
                top: 50,
                left: 50,
                fill: '#D84942',
            });

            canvas.add(rect);
        }
    }


    return (
        <div id="container">
            <div className="Toolbar darkmode">
                <IconButton onClick={addRect} variant="ghost" size="medium">
                    <SquareIcon />
                </IconButton>
            </div>
            <canvas id="canvas" ref={canvasRef} />
            <Settings id="settings" canvas={canvas} />

        </div>
    );
}

export default MakeDiaryPage;