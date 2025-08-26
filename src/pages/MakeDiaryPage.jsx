import { React, useRef, useEffect, useState } from 'react';
import { Rect, Canvas, Triangle, Circle } from 'fabric';
import { IconButton } from "blocksin-system";
import { SquareIcon, TriangleIcon, CircleIcon } from "sebikostudio-icons";
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

    const addTriangle = () => {
        if (canvas) {
            const triangle = new Triangle({
                width: 100,
                height: 100,
                top: 50,
                left: 50,
                fill: '#D84942',
            });

            canvas.add(triangle);
        }
    }

    const addCircle = () => {
        if (canvas) {
            const circle = new Circle({
                radius: 50,
                top: 50,
                left: 50,
                fill: '#D84942',
            });

            canvas.add(circle);
        }
    }

    function IconWithLabel({ icon: Icon, label, onClick}) {
        return(
            <div className="icon-with-label" onClick={onClick}>
                <IconButton variant="ghost" size="medium">
                    <Icon />
                </IconButton>
                <span>{label}</span>
            </div>
        );
    }



    return (
        <div id="container">
            <div className="Toolbar darkmode">

                <div className="toolbox">
                    <a className="label">형식</a>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SquareIcon} label="Canvas" onClick={() => { }} />
                        <IconWithLabel icon={CircleIcon} label="Linear" onClick={() => { }} />
                        <IconWithLabel icon={TriangleIcon} label="Diary" onClick={()=>{}}/>
                    </div>
                </div>

                <div className="toolbox">
                    <a className="label">도형</a>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SquareIcon} label="사각형" onClick={addRect} />
                        <IconWithLabel icon={TriangleIcon} label="삼각형" onClick={addTriangle} />
                        <IconWithLabel icon={CircleIcon} label="원" onClick={addCircle} />
                    </div>
                </div>

                <div className="toolbox">
                    <a className="label">스티커</a>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SquareIcon} label="사각형" onClick={addRect} />
                        <IconWithLabel icon={TriangleIcon} label="삼각형" onClick={addTriangle} />
                        <IconWithLabel icon={CircleIcon} label="원" onClick={addCircle} />
                    </div>
                </div>

                <div className="toolbox">
                    <a className="label">이미지</a>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SquareIcon} label="사각형" onClick={addRect} />
                        <IconWithLabel icon={TriangleIcon} label="삼각형" onClick={addTriangle} />
                        <IconWithLabel icon={CircleIcon} label="원" onClick={addCircle} />
                    </div>
                </div>

            </div>
            <canvas id="canvas" ref={canvasRef} />
            <Settings id="settings" canvas={canvas} />

        </div>
    );
}

export default MakeDiaryPage;