import { SlidePack } from "app";
import { useStoreActions, useStoreState } from "../components/application/store";
import * as React from "react";
import { useParams } from "react-router-dom";


export default function PresentShow(slides: SlidePack) {
    const { id } = useParams<Record<string, string>>();
    const { setSlide } = useStoreActions((action) => action)
    const { currentSlide } = useStoreState((state) => state)

    React.useEffect(() => {
        setSlide({
            slideNumber: Number(id),
            byUser: true
        })
    }, [Number(id)])

    if (slides.slides[currentSlide].type === 0) {

        return (
            <div id="mySlide">
                <table >
                    <th>{slides.slides[currentSlide].title}</th>
                </table>
            </div>

        );
    } else {

        return (
            <div id="mySlide">
                <table>
                    <th colSpan={2}>{slides.slides[currentSlide].title}</th>
                    <tr>
                        <td className="element">{slides.slides[currentSlide].text}</td>
                        <td className="element" rowSpan={4}>
                            {slides.slides[currentSlide].picture}
                        </td>
                    </tr>

                    <tr>
                        <td className="element">
                            <ul>
                                <li>{slides.slides[currentSlide].notes}</li>
                            </ul>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }

    return(
        <></>
    )
}
