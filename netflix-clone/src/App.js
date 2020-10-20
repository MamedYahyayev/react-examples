import React from "react";
import jumboData from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((jumbo) => (
        <Jumbotron key={jumbo.id} direction={jumbo.direction}>
          <p>{jumbo.title}</p>
          <p>{jumbo.subTitle}</p>
          <p>{jumbo.image}</p>
          <p>{jumbo.alt}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
