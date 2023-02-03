import * as React from "react";
import "../../style.css";
import { Link, useParams } from "react-router-dom";
import { decreasePage, incrementPage, SlidePack } from "../../app";
import { useStoreActions } from '../application/store/index';
import { FilterActionTypes, StateMapper, useStoreState } from "easy-peasy";
import { isMobile } from "react-device-detect";


function redirect(index: string) {
  window.location.href = "/" + index;
}


export default function AppToolbar(slides: SlidePack) {
  const { id } = useParams<Record<string, string>>();
  const slide = parseInt(id);

  let current: any;
  const changeSlideVisibility = useStoreActions((actions) => actions.changeSlideVisibility);
  useStoreState((state) => current = state)

  if (isMobile) {
    return (
      <div className="footer">
        <div className="top">
          <div className=" center inline">
            <Link to={`/${decreasePage(slide, 1)}`}>
              <button className="button inline">Prev</button>
            </Link>
            <Link to={`/${incrementPage(slide, slides.slides.length - 1)}`}>
              <button className="button inline">Next</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="footer">
      <div className="top">
        <div className="left inline">
          <button className="button" onClick={() => changeSlideVisibility(current)}>Change visibility</button>
        </div>

        <div className="right">
          <div className="inline">
            <form className="inline">
              <select
                name="dropdown"
                onChange={(event) => redirect(event.target.value)}
              >
                {slides.slides.map((value, index) => {
                  return index === 0 ? (
                    <option value="">Choose</option>
                  ) : (
                    <option value={index}>{index}</option>
                  );
                })}
              </select>
            </form>
            <div className="inline">
              <Link to={`/${decreasePage(slide, 1)}`}>
                <button className="button inline">Prev</button>
              </Link>
              <Link to={`/${incrementPage(slide, slides.slides.length - 1)}`}>
                <button className="button inline">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}