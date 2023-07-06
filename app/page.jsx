import Feed from "@components/Feed";
import React from "react";

export default function home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        magnam illum ullam, natus harum magni cupiditate. Totam commodi nobis
        incidunt optio deserunt blanditiis non harum fugit aspernatur cumque?
        Nesciunt, nostrum?
      </p>
      <Feed />
    </section>
  );
}
