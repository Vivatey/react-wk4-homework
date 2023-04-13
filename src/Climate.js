import React from "react";
import Overview from "./Overview";
import Temperature from "./Temperature";
import "./Climate.css";

export default function Climate() {
  return (
    <div className="Climate">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9 w-70">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control shadow-sm"
              autofocus="on"
              autocomplete="off"
              id="city-input"
            />
          </div>
          <div className="col-3 w-30">
            <input
              type="submit"
              value="search"
              className="btn btn-dark shadow-sm"
            />
          </div>
        </div>
      </form>
      <Overview />
      <Temperature />
    </div>
  );
}
