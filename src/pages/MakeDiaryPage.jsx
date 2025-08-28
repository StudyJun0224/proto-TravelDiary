import { React, useRef, useEffect, useState } from 'react';
import { Rect, Canvas, Triangle, Circle } from 'fabric';
import { Button, IconButton } from "blocksin-system";
import { SquareIcon, TriangleIcon, CircleIcon, HamburgerMenuIcon, ShadowOuterIcon, SizeIcon, LineHeight2Icon, ArrowLeftIcon, FilePlusIcon, PlusCircleIcon } from "sebikostudio-icons";
import Settings from "../modules/Settings";
import '../styles/MakeDiaryPage.css'

function MakeDiaryPage() {

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [showImage, setShowImage] = useState(false); // test

    const fileInputRef = useRef(null);


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

    const WTF = () => {
        return (
            <p>📒</p>
        );
    }

    const IconWithLabel = ({ icon: Icon, label, onClick }) => {
        return (
            <div className="icon-with-label" onClick={onClick}>
                <IconButton variant="ghost" size="medium">
                    <Icon />
                </IconButton>
                <span>{label}</span>
            </div>
        );
    }
    
    const handleImageFile = (file) => {
        if (!canvas || !file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            fabric.Image.fromURL(e.target.result, (img) => {
                img.set({
                    left: 100,
                    top: 100,
                    scaleX: 0.5,
                    scaleY: 0.5,
                });
                canvas.add(img);
            });
        };
        reader.readAsDataURL(file);
    };


    const ImageToolbar = () => {
        return (
            <div className="imagetoolbar">
                <div className="imagetoolbar__top">
                    <span className="imagetoolbar__label">이미지 저장소</span>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={(e) => handleImageFile(e.target.files[0])}
                    />
                    <IconButton onClick={() => fileInputRef.current.click()} variant="ghost" size="medium">
                        <PlusCircleIcon />
                    </IconButton>
                    <IconButton onClick={() => {setShowImage(false)}} variant="ghost" size="medium">
                        <ArrowLeftIcon />
                    </IconButton>
                </div>
                <hr className="divideline" />

                <div
                    className="fileicon"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        handleImageFile(file);
                    }}
                >
                    <FilePlusIcon style={{ width: '50px', height: '50px', color: '#d3d3d3' }} />
                    <p style={{ color: '#d3d3d3' }}>파일을 끌어다 놓아보세요!</p>
                </div>
            </div>
        );
    }

    const DefaultToolbar = () => {
        return (
            <>
                <div className="toolbox">

                    <div className="toolbox__top">

                        <a className="label">형식</a>

                    </div>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SizeIcon} label="Canvas" onClick={() => { }} />
                        <IconWithLabel icon={LineHeight2Icon} label="Linear" onClick={() => { }} />
                        <IconWithLabel icon={WTF} label="Diary" onClick={() => { }} />
                    </div>
                </div>

                <div className="toolbox">
                    <div className="toolbox__top">
                        <a className="label">도형</a>
                    </div>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SquareIcon} label="사각형" onClick={addRect} />
                        <IconWithLabel icon={TriangleIcon} label="삼각형" onClick={addTriangle} />
                        <IconWithLabel icon={CircleIcon} label="원" onClick={addCircle} />
                    </div>
                </div>

                <div className="toolbox">
                    <div className="toolbox__top">
                        <a className="label">스티커</a>
                    </div>
                    <hr className="divideline" />
                    <div className="buttonbox">
                        <IconWithLabel icon={SquareIcon} label="사각형" onClick={addRect} />
                        <IconWithLabel icon={TriangleIcon} label="삼각형" onClick={addTriangle} />
                        <IconWithLabel icon={CircleIcon} label="원" onClick={addCircle} />
                    </div>
                </div>

                <div className="toolbox">
                    <div className="toolbox__top">
                        <span className="label">이미지</span>
                        <IconButton id="toolbutton__image" variant="ghost" size="medium" onClick={() => { setShowImage(true) }}>
                            <HamburgerMenuIcon />
                        </IconButton>
                    </div>
                    <hr className="divideline" />

                </div>
            </>
        );
    }

    return (
        <div id="container">
            <div className="Toolbar darkmode">

                {showImage ? <ImageToolbar /> : <DefaultToolbar />}

            </div>
            <canvas id="canvas" ref={canvasRef} />
            <Settings id="settings" canvas={canvas} />

        </div>
    );
}

export default MakeDiaryPage;