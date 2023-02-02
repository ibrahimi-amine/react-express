import * as React from "react";
import SlideShow from "./components/base/slideShow";
import AppToolbar from "./components/base/appToolbar";
import { Slide, slideType } from "../type";
import { Route, Switch } from "react-router-dom";
import Controller from "./components/controller/contoller";
import ControllerToolbar from "./components/controller/contollerToolbar";
import LandingPage from "./components/LandingPage";
import PresentShow from "./present/present";

// Increase page
export function incrementPage(slideNumber: number, maxNumber: number) {
  if (slideNumber === maxNumber)
    return slideNumber;
  return slideNumber + 1;
}

// Decrease page
export function decreasePage(slideNumber: number, minNumber: number) {
  if (slideNumber === minNumber)
    return slideNumber;
  return slideNumber - 1;
}

// The slides data
const data: Slide[] = [
  {
    type: slideType.title,
    title: "Empty",
    text: "Empty",
    isVisible: true,
    notes: "Empty",
    picture: "Empty",

  },
  {
    type: slideType.title,
    title: "Gestion des absences dématérialisées",
    text: "Le TP porte sur des rappels de dev Web",
    isVisible: true,
    notes: "Note TP1",
    picture: "",
  },
  {
    type: slideType.content,
    title: "Contexte",
    text: "La fréquentation irrégulière des élèves dans leurs classes est considérée comme un problème pédagogique à contrôler.",
    isVisible: true,
    notes: "Note TP2",
    picture: "",
  },
  {
    type: slideType.content,
    title: "Enjeux",
    text: "Adopter une solution pratique et efficace pour la gestion des absences. Plus besoin des feuilles volantes !",
    isVisible: true,
    notes: "Note TP3",
    picture: "",
  },
  {
    type: slideType.content,
    title: "Objectif",
    text: "Dématérialiser les feuilles des absences.",
    isVisible: true,
    notes: "Note TP4",
    picture: "",
  },
  {
    type: slideType.content,
    title: "Solution actuel : Problématique",
    text: "S’authentifier avec le Compte universitaire, Vérifier la position de l’étudiant puis valider sa présence",
    isVisible: true,
    notes: "Note TP5",
    picture: "",
  },
];

export interface SlidePack {
  slides: Slide[];
}

const App: React.FC = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route
          path="/:id"
          exact={true}
          render={() => (
            <div className="container">
              <SlideShow slides={data} />
              <AppToolbar slides={data} />
            </div>
          )}
        />
        <Route
          path="/present/:id"
          exact={true}
          render={() => (
            <div className="container">
              <SlideShow slides={data} />
            </div>
          )}
        />
        <Route
          path="/controler/:id"
          exact={true}
          render={() => (
            <div className="container">
              <Controller slides={data} />
              <ControllerToolbar slides={data} />
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
