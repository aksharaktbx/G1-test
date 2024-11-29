import React, { useEffect, useRef, useState } from 'react';
import paper from 'paper';
import SimplexNoise from 'simplex-noise'; // Ensure this is installed

const CustomCursor = () => {
    const innerCursorRef = useRef(null);
    const canvasRef = useRef(null);
    
    const [cursorSize, setCursorSize] = useState(5); // Default size for cursor
    
    useEffect(() => {
        let clientX = -100;
        let clientY = -100;
        let lastX = 0;
        let lastY = 0;
        let isStuck = false;
        let stuckX, stuckY, group;

        const innerCursor = innerCursorRef.current;

        const updateCursorSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Dynamically adjust the cursor size relative to window size
            const newSize = Math.min(width, height) * 0.02; // Adjust the factor (0.02) for responsiveness
            setCursorSize(newSize);
        };

        // Handle window resize to update cursor size
        window.addEventListener('resize', updateCursorSize);
        updateCursorSize(); // Initial size adjustment

        const initCursor = () => {
            document.addEventListener('mousemove', e => {
                clientX = e.clientX;
                clientY = e.clientY;
            });

            const render = () => {
                innerCursor.style.transform = `translate(${clientX - cursorSize / 2}px, ${clientY - cursorSize / 2}px)`;
                innerCursor.style.width = `${cursorSize}px`;
                innerCursor.style.height = `${cursorSize}px`;
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        };

        const initCanvas = () => {
            const canvas = canvasRef.current;
            paper.setup(canvas);
            const shapeBounds = { width: 75, height: 75 };
            const strokeColor = 'rgb(79, 70, 229)';
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
            window.removeEventListener('resize', updateCursorSize);
            document.removeEventListener('mousemove', initCursor);
        };
    }, [cursorSize]);

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
                    transition: transform 0.1s ease-out; /* Smooth transform */
                }
                .cursor--small {
                    border-radius: 50%;
                    background: #4f46e5;
                    z-index: 11000;
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
