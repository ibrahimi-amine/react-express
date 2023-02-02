export interface Slide {
    type: slideType;
    title: string;
    picture: string;
    text: string;
    notes: string;
    isVisible: boolean;
  }

  export enum slideType {
    "title",
    "content",
  }