import { SlidePack } from "app";
import { useStoreActions, useStoreState } from "../../components/application/store";
import * as React from "react";
import { useParams } from "react-router-dom";
import "./style.css"

export default function Controller(slides: SlidePack) {
    const { id } = useParams<Record<string, string>>();
    const slide = parseInt(id);
    const { setSlide } = useStoreActions((action) => action)
    const { currentSlide } = useStoreState((state) => state)

    React.useEffect(() => {
        setSlide({
            slideNumber: Number(id),
            byUser: true
        })
    }, [id])

    if (slides.slides[currentSlide].type === 0) {
        return (
            <div>

                <p>{slides.slides[currentSlide].title}</p>

            </div>

        );
    } else {
        return (
            <div>
                <p>{slides.slides[currentSlide].title}</p>
                <div className="notes">
                    {slides.slides[currentSlide].notes}
                </div>

            </div>
        );
    }
}
