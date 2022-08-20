import React from "react";

export const items = {
  sport: {
    bikeMountain: {
      id: 1,
      title: "Велосипед горный",
      price: 15000,
      initialPrice: 15000,
      quantity: 0,
    },
    eKickScooter: {
      id: 2,
      title: "Электросамокат",
      price: 25000,
      initialPrice: 25000,
      quantity: 0,
    },
    kickScooterChild: {
      id: 3,
      title: "Самокат детский",
      price: 8000,
      initialPrice: 8000,
      quantity: 0,
    },
    swedishWall: {
      id: 4,
      title: "Шведская стенка",
      price: 8000,
      initialPrice: 8000,
      quantity: 0,
    },
    footballBall: {
      id: 5,
      title: "Футбольный мяч",
      price: 8000,
      initialPrice: 8000,
      quantity: 0,
    },
    rollersChild: {
      id: 6,
      title: "Ролики детские",
      price: 8000,
      initialPrice: 8000,
      quantity: 0,
    },
  }
};

export const sportItemsContext = React.createContext(items.sport);
