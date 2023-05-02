import React from "react";

type CardProps = {
  children: JSX.Element[] | JSX.Element;
};

const Card = ({ children }: CardProps) => {
  const subComponentList = Object.keys(Card);
  const subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className="flex flex-col max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white gap-4">
      {subComponents.map((component) => component)}
    </div>
  );
};

const Header = (props: CardProps) => (
  <div className="card-header">{props.children}</div>
);
Card.Header = Header;

const Body = (props: CardProps) => (
  <div className="card-body">{props.children}</div>
);
Card.Body = Body;

const Footer = (props: CardProps) => (
  <div className="card-footer">{props.children}</div>
);
Card.Footer = Footer;

export default Card;
