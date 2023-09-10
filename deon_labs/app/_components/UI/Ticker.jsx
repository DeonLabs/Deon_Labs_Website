import React from "react";
import {
    AnimationPlaybackControls,
    useAnimate,
    useInView,
} from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

const noop = () => {};

const Ticker = (props) => {
    const {
        children,
        duration = 10,
        onMouseEnter = noop,
        onMouseLeave = noop,
        isPlaying = true,
        direction = TICKER_DIRECTION_LEFT,
    } = props;
    const tickerRef = React.useRef(null);
    const [tickerUUID, setTickerUUID] = React.useState("");
    const [tickerContentWidth, setTickerContentWidth] = React.useState(0);
    const [numDupes, setNumDupes] = React.useState(1);
    const [scope, animate] = useAnimate();
    const [animationControls, setAnimationControls] = React.useState(undefined);
    const isInView = useInView(scope);

    React.useEffect(() => {
        setTickerUUID(uuidv4());
    }, [setTickerUUID]);

    React.useEffect(() => {
        let contentWidth = 0;

        for (let index = 0; index < children.length; index++) {
            const element = document.getElementById(
                tickerUUID + "_" + index
            )?.clientWidth;
            if (element) {
                contentWidth += element;
            }
        }

        setTickerContentWidth(contentWidth);
    }, [setTickerContentWidth, children, tickerUUID]);

    React.useEffect(() => {
        if (tickerRef.current && tickerContentWidth) {
            setNumDupes(
                Math.max(
                    Math.ceil(
                        (2 * tickerRef.current.clientWidth) / tickerContentWidth
                    ),
                    1
                )
            );
        }
    }, [tickerContentWidth, tickerRef, setNumDupes]);

    React.useEffect(() => {
        if (isInView && !animationControls) {
            const controls = animate(
                scope.current,
                { x: tickerContentWidth ? tickerContentWidth * direction : 0 },
                { ease: "linear", duration, repeat: Infinity }
            );
            controls.play();
            setAnimationControls(controls);
        }
    }, [
        isInView,
        animationControls,
        scope,
        direction,
        duration,
        tickerContentWidth,
        setAnimationControls,
        animate,
    ]);

    React.useEffect(() => {
        if (animationControls) {
            if (!isInView || !isPlaying) {
                animationControls.pause();
            } else {
                animationControls.play();
            }
        }
    }, [isInView, isPlaying, animationControls]);

    return (
        <div
            className="FMT__container w-full overflow-hidden"
            ref={tickerRef}
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div
                ref={scope}
                className="FMT__container__contents"
                // initial={false}
                // animate={{ x: tickerContentWidth * direction }}
                // transition={{ ease: 'linear', duration, repeat: Infinity }}
                style={{ display: "flex" }}>
                {children.map((item, index) => (
                    <div key={index} id={`${tickerUUID}_${index}`}>
                        {item}
                    </div>
                ))}
                {[...Array(numDupes)].map((_) =>
                    children.map((item, index) => <div key={index}>{item}</div>)
                )}
            </div>
        </div>
    );
};

export default Ticker;

export { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT };
