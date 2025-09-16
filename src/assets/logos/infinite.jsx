import React from 'react'
import { infinity } from 'ldrs'
infinity.register()


const infinite = ({ size = 100, color, stroke  }) => {
    return (
        <div>
            <l-infinity
                size={size}
                stroke-length="0.5"
                bg-opacity="0.03"
                speed="1.5"
                color={color}
                stroke={stroke}
            ></l-infinity>
        </div>
    )
}

export default infinite