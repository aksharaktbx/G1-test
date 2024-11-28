import React, { useEffect, useRef } from 'react';
import paper from 'paper';
import SimplexNoise from 'simplex-noise'; // Ensure this is installed

const CustomCursor = () => {
    const innerCursorRef = useRef(null);
    const canvasRef = useRef(null);
    
    useEffect(() => {
        let clientX = -100;
        let clientY = -100;
        let lastX = 0;
        let lastY = 0;
        let isStuck = false;
        let stuckX, stuckY, group;

        const innerCursor = innerCursorRef.current;

        const initCursor = () => {
            document.addEventListener('mousemove', e => {
                clientX = e.clientX;
                clientY = e.clientY;
            });

            const render = () => {
                innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        };

        const initCanvas = () => {
            const canvas = canvasRef.current;
            paper.setup(canvas);
            const shapeBounds = { width: 75, height: 75 };
            const strokeColor = 'rgba(255, 0, 0, 0.5)';
            const strokeWidth = 1;
            const segments = 8;
            const radius = 15;

            const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
            polygon.strokeColor = strokeColor;
            polygon.strokeWidth = strokeWidth;
            polygon.smooth();
            group = new paper.Group([polygon]);
            group.applyMatrix = false;

            paper.view.onFrame = () => {
                lastX = lerp(lastX, clientX, 0.2);
                lastY = lerp(lastY, clientY, 0.2);
                group.position = new paper.Point(lastX, lastY);
            };
        };

        const lerp = (a, b, n) => (1 - n) * a + n * b;

        const initHovers = () => {
            const handleMouseEnter = (e) => {
                const navItem = e.currentTarget;
                const navItemBox = navItem.getBoundingClientRect();
                stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
                stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
                isStuck = true;
            };

            const handleMouseLeave = () => {
                isStuck = false;
            };

            const linkItems = document.querySelectorAll('.link');
            linkItems.forEach(item => {
                item.addEventListener('mouseenter', handleMouseEnter);
                item.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        initCursor();
        initCanvas();
        initHovers();

        return () => {
            document.removeEventListener('mousemove', initCursor);
        };
    }, []);

    return (
        <section className="relative">
            <style>{`
                @import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);
              
                section {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: none;
                }
                a {
                    color: #4793ff;
                    cursor: none;
                }
                .cursor {
                    position: fixed;
                    left: 0;
                    top: 0;
                    pointer-events: none;
                }
                .cursor--small {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    z-index: 11000;
                    background: #4f46e5;
                }
                .cursor--canvas {
                    width: 100vw;
                    height: 100vh;
                    z-index: 12000;
                }
            `}</style>
           
            <div ref={innerCursorRef} className="cursor cursor--small"></div>
            <canvas ref={canvasRef} className="cursor cursor--canvas" resize></canvas>
        </section>
    );
};

export default CustomCursor;
