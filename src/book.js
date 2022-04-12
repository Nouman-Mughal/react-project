import React from "react";

const Book = (props) => {
  //attriute eventhandler
  const { img, title, author } = props;
  const clickhandler = () => {
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickhandler}>
        referenceexample
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
