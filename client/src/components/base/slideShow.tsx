import { SlidePack } from "app";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "../../components/application/store/index";
import { isMobile } from 'react-device-detect';


export default function SlideShow(slides: SlidePack) {
  const { id } = useParams<Record<string, string>>();
  const slide = parseInt(id);
  const isVisible = useStoreState((state) => state.isVisible);
  const opacity: string = isVisible ? "opacity-100" : "opacity-10";

  const { currentSlide } = useStoreState((state) => state);
  const { setSlide, nextSlide, previousSlide } = useStoreActions(
    (action: any) => action
  );

  if (id === undefined || id === null) {
    window.location.href = "/#/1"
  }
  else {
    React.useEffect(() => {
      setSlide({
        slideNumber: Number(id),
        byUser: true
      })
    }, [id]);

    if (slides.slides[currentSlide].type === 0) {
      return (
        <div>
          <table className={`title ${opacity}`}>
            <th>{slides.slides[currentSlide].title}</th>
          </table>
        </div>

      );
    } else {
      if (isMobile) {
        return (
          <div>
            <table className={`content ${opacity}`}>
              <tr>
                <td className="element">
                  <ul>
                    <li>{slides.slides[currentSlide].notes}</li>
                  </ul>
                </td>
              </tr>

            </table>
          </div>
        )
      }
      return (
        <div>
          <table className={`content ${opacity}`}>
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
  }
}