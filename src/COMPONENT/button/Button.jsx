import React from "react";

function Button(props) {
    const { text, backgroundColor, color, border, borderRadius, width, height, fontSize,padding, img} =
        props;

    return (
        <button 
            style={{
                backgroundColor: backgroundColor,
                color: color,
                border: border,
                borderRadius: borderRadius,
                width: width,
                height: height,
                onClick: onClick,
                img: img,
                fontSize:fontSize,
                padding:padding,

            }}
        >
            {text}
        </button>
    );
}

export default Button;