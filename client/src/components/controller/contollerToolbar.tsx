import * as React from "react";
import "../../style.css";
import { Link, useParams } from "react-router-dom";
import { decreasePage, incrementPage, SlidePack } from "../../app";
import { useStoreActions } from "../../components/application/store";

export default function ControllerToolbar(slides: SlidePack) {
  const { id } = useParams<Record<string, string>>();
  const { nextSlide, previousSlide } = useStoreActions((action) => action);
  const slide = parseInt(id);

  return (
    <div className="footer">
      <div className="top">
        <div className=" center inline">
          <Link to={`/controler/${decreasePage(slide, 1)}`}>
            <button className="button inline" onClick={
              () => previousSlide({
                slideNumber: Number(id),
                byUser: true
              })
            }>Prev</button>
          </Link>
          <Link to={`/controler/${incrementPage(slide, slides.slides.length - 1)}`}>
            <button className="button inline" onClick={
              () => nextSlide({
                slideNumber: Number(id),
                byUser: true
              })
            }>Next</button>
          </Link>
        </div>
      </div>
    </div>
  )
}