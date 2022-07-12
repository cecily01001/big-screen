import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

Ruler.defaultProps = {
  type: "horizontal",
  zoom: 1,
  width: 0,
  height: 0,
  unit: 100,
  style: { width: "100%", height: "100%" },
  // backgroundColor: "#232323",
  backgroundColor: "rgba(255, 255, 255, 0)",
  textColor: "#808080",
  lineColor: "#dcdcdc"
}

function Ruler(props) {

  const canvasRef = useRef()
  const [canvasContext, setCanvasContext] = useState(null)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    setCanvasContext(canvas.getContext('2d'))
  }, [])

  useEffect(() => {
    setCanvasWidth(props.width)
    setCanvasHeight(props.height)
  }, [props.width, props.height])

  useEffect(() => {
    if (canvasWidth && canvasHeight) {
      const canvas = canvasRef.current
      canvas.width = canvasWidth
      canvas.height = canvasHeight

      draw()
    }
  }, [canvasWidth, canvasHeight])

  // useEffect(() => {
  //     if (canvasContext) {
  //         draw()
  //     }
  // }, [canvasContext])

  const draw = () => {
    const { unit, zoom, type, backgroundColor, lineColor, textColor } = props
    const scrollPos = 0
    const isHorizontal = type === "horizontal";

    const canvas = canvasRef.current
    const context = canvasContext;
    const width = canvasWidth;
    const height = canvasHeight;

    // 解决字体模糊问题
    // 字体模糊是因为canvas是通过像素点进行绘制，让屏幕大小与屏幕分辨率不同就会出现模糊问题。可以通过获取屏幕与分辨率的比值进行比例放大。
    const dpr = window.devicePixelRatio || 1;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    canvas.width = dpr * width;
    canvas.height = dpr * height;
    context.scale(dpr, dpr);


    context.fillStyle = backgroundColor;
    context.rect(0, 0, width, height);
    context.fill();
    context.save();

    context.strokeStyle = lineColor;
    context.lineWidth = .5;
    context.font = "8px sans-serif";
    context.fillStyle = textColor;
    context.translate(0.5, 0);
    context.beginPath();

    const size = isHorizontal ? width : height; // 1400
    const zoomUnit = zoom * unit; // 50
    const minRange = Math.floor((scrollPos * zoom) / zoomUnit);
    const maxRange = Math.ceil((scrollPos * zoom + size) / zoomUnit);
    const length = maxRange - minRange;

    for (let i = 0; i < length; ++i) {
      const startPos = ((i + minRange) * unit - scrollPos) * zoom;

      if (startPos >= -zoomUnit && startPos < size) {
        const startX = isHorizontal ? startPos + 3 : width - 4;
        const startY = isHorizontal ? height - 2 : startPos - 4;

        if (isHorizontal) {
          context.fillText(`${(i + minRange) * unit}`, startX, startY);
        } else {
          context.save();
          context.translate(startX, startY);
          context.rotate(-Math.PI / 2);
          context.fillText(`${(i + minRange) * unit}`, 0, 0);
          context.restore();
        }
      }

      for (let j = 0; j < 10; ++j) {
        const pos = startPos + (j / 10) * zoomUnit;

        if (pos < 0 || pos >= size) {
          // continue;
          break;
        }
        const lineSize = j === 0 ? (isHorizontal ? 10 : 10) : j % 5 === 0 ? 8 : 4;

        const x1 = isHorizontal ? pos : lineSize;
        const x2 = isHorizontal ? pos : 0;
        const y1 = isHorizontal ? lineSize : pos;
        const y2 = isHorizontal ? 0 : pos;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
      }
    }
    context.stroke();
    context.restore();
  }



  return (
    <>
      <div style={{ height: 16 }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  )
}

export default Ruler;