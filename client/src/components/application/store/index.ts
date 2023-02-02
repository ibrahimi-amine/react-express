import { Action, action, createStore, createTypedHooks } from "easy-peasy";
import { Middleware, Dispatch, AnyAction } from "redux";
import { io } from "socket.io-client"

interface SlideStoreModel {
  name: string;
  currentSlide: number;
  isVisible: boolean;
  setSlide: Action<SlideStoreModel, SetSlideAction>;

  nextSlide: Action<SlideStoreModel, SetNextSlideAction>;
  previousSlide: Action<SlideStoreModel, SetPreviousSlideAction>;

  changeSlideVisibility: Action<SlideStoreModel, SlideVisibilityAction>;
}

interface SetNextSlideAction {
  slideNumber: number;
  byUser: boolean;
}

interface SetPreviousSlideAction {
  slideNumber: number;
  byUser: boolean;
}

interface SetSlideAction {
  slideNumber: number;
  byUser: boolean;
}

interface SlideVisibilityAction {
  slideNumber: number;
}

const storeModel: SlideStoreModel = {
  name: "slidesApp",
  currentSlide: 0,
  isVisible: true,
  nextSlide: action((state, payload) => {
    state.currentSlide = payload.slideNumber;
  }),
  previousSlide: action((state, payload) => {
    state.currentSlide = payload.slideNumber;
  }),
  setSlide: action((state, payload) => {
    state.currentSlide = payload.slideNumber;
  }),
  changeSlideVisibility: action((state) => {
    state.isVisible = !state.isVisible;
  }),
};

const sock = io();

const myLoggerMiddleware: Middleware<Dispatch, SlideStoreModel> =
  (api) => (next) => {
    return (action: AnyAction) => {
      console.log("State Before:", api.getState());
      if (action.payload.byUser === true) {
        sock.emit("liveSlide", action.payload.slideNumber);
      }
      return next(action);
    };
  };

const store = createStore<SlideStoreModel>(storeModel, {
  middleware: [myLoggerMiddleware],
});

sock.on("tasks", (msg) => {
  store.getActions().setSlide({
    slideNumber: msg,
    byUser: false
  })
})

export default store;

export const { useStore, useStoreActions, useStoreDispatch, useStoreState } =
  createTypedHooks<SlideStoreModel>();
