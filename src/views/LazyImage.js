import React from "react";
import LazyLoad from "vanilla-lazyload";

// Only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad({elements_selector: ".lazy"});
}

export class LazyImage extends React.Component {
    // Update lazyLoad after first rendering of every image
    componentDidMount() {
        document.lazyLoadInstance.update();
    }

    // Update lazyLoad after rerendering of every image
    componentDidUpdate() {
        document.lazyLoadInstance.update();
    }

    // Just render the image with data-src
    render() {
        const { alt, src, srcset, sizes, width, height } = this.props;
        return (
            <img
                alt={alt}
                className="lazy"
                data-src={src} //默认图片
                data-srcset={srcset} //实际地址
                data-sizes={sizes}
                width={width}
                height={height}
            />
        );
    }
}

export default LazyImage;