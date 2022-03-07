import React from "react";
import chessmate from "../../assets/images/chessmate.png"
import getToWork from "../../assets/images/get-to-work.png";
import codeQuiz from "../../assets/images/code-quiz.png";
import weatherForecast from "../../assets/images/weather-forecast.png";
import packRat from "../../assets/images/pack-rat-scrnsht.png";
import budgetTracker from "../../assets/images/pwa-budget-tracker.png";

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row justify-content-between align-content-center">
        <div className="card col-6 col-sm-12 border border-white mb-3">
          <img src={chessmate} alt="chessmate image" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://mighty-ravine-90150.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Chessmate
              </a>
              <br />
              <a href="#">Repository</a>
            </p>
          </div>
        </div>

        <div className="card col-6 col-sm-12 border border-white mb-3">
          <img src={getToWork} alt="get-to-work image" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://stormy-fortress-72998.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Get to Work
              </a>
              <br />
              <a
                href="https://github.com/curriecoder/project-management-application"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-6 col-sm-12 border border-white mb-3">
          <img src={codeQuiz} alt="code-quiz image" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://curriecoder.github.io/code-quiz/"
                target="_blank"
                rel="noreferrer"
              >
                Code Quiz
              </a>
              <br />
              <a
                href="https://github.com/curriecoder/code-quiz"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="w-100"></div>

        <div className="card col-6 col-sm-12 border border-white mb-3">
          <img src={weatherForecast} alt="weather-dashboard image" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://curriecoder.github.io/weather-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                Weather Dashboard
              </a>
              <br />
              <a
                href="https://github.com/curriecoder/weather-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-6 col-sm-12 border border-white mb-3">
          <img src={packRat} alt="pack-rat image" />

          <div className="card-body">
            <p className="card-text">
              <a
                href="https://nazikbestcoder.github.io/Pack-Rat/"
                target="_blank"
                rel="noreferrer"
              >
                Pack Rat
              </a>
              <br />
              <a
                href="https://github.com/curriecoder/Pack-Rat"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-6 col-sm-12 border border-white mb-3">
          <img src={budgetTracker} alt="pwa-budget-tracker image" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://fierce-dawn-66408.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                PWA Budget Tracker
              </a>
              <br />
              <a
                href="https://github.com/curriecoder/online-offline-budget-tracker"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
