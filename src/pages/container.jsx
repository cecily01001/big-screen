import React, { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
// import Ruler from "./ruler"

function Container() {

    const [width, setWidth] = useState(0)
    const containerRef = useRef()

    useEffect(() => {
        const { width: containerWidth } = containerRef.current.getBoundingClientRect()
        console.log(containerWidth)
        console.log(containerRef.current.scrollWidth)
        setWidth(containerWidth)

        const resize = () => {
            const { width: containerWidth } = containerRef.current.getBoundingClientRect()
            // console.log(containerWidth)
            setWidth(containerWidth)
        }
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])




    return (
        <div ref={containerRef}>
            {/* <Ruler width={width} height={20} /> */}
        </div>
    )
}

export default Container