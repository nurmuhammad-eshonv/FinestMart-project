import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import { FcLike } from "react-icons/fc";
function Home() {
  const deleteCard = (index) => {
    const deleterCard = [...cards];
    deleterCard.splice(index, 1);
    setCards(deleterCard);
  };
  const [cards, setCards] = useState([]);

  const nameRef = useRef("");
  const urlRef = useRef("");
  const priceRef = useRef("");

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards"));
    if (storedCards) {
      setCards(storedCards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function handleSubmit(e) {
    e.preventDefault();
   
    if (nameRef.current.value.length < 3) {
      alert("Name should contain at least 3 characters");
      return;
    }
    if (priceRef.current.value <= 0) {
      alert("please enter a valid price");
      return;
    }

    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-zd]([a-zd-]*[a-zd])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))"
    );

    if (!urlPattern.test(urlRef.current.value)) {
      alert("Please enter a valid image URL");
      return;
    }

    const user = {
      name: nameRef.current.value,
      url: urlRef.current.value,
      price: priceRef.current.value,
    };

    setCards((prevCards) => [...prevCards, user]);

    nameRef.current.value = "";
    urlRef.current.value = "";
    priceRef.current.value = "";

    document.getElementById("my_modal_1").close();
  }

  return (
    <div className="">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="image_container">
              <img src={card.url} alt={card.name} />
            </div>
            <div className="title">
              <span>{card.name}</span>
            </div>
            <div className="size">
              <span>Size</span>
              <ul className="list-size">
                <li className="item-list">
                  <button className="item-list-button">37</button>
                </li>
                <li className="item-list">
                  <button className="item-list-button">38</button>
                </li>
                <li className="item-list">
                  <button className="item-list-button">39</button>
                </li>
                <li className="item-list">
                  <button className="item-list-button">40</button>
                </li>
                <li className="item-list">
                  <button className="item-list-button">41</button>
                </li>
              </ul>
            </div>
            <div className="action">
              <div className="price">
                <span>PRICE : {card.price}$</span>
              </div>
              <button className="btnn">
                <FcLike />
              </button>
            </div>
            <button onClick={deleteCard} className="cart-button">
              <span>delete</span>
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        type="button"
        className="button"
      >
        <span className="button__text">Add card</span>
        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
            className="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            
          </p>
          <div className="modal-action">
            <form onSubmit={handleSubmit}>
              <input
                ref={nameRef}
                className="input w-full mb-5 border border-slate-500"
                type="text"
                placeholder="enter name..."
              />
              <input
                ref={urlRef}
                className="input w-full mb-5 border-slate-500"
                type="url"
                placeholder="enter img url..."
              />
              <input
                ref={priceRef}
                className="input w-full mb-5 border-slate-500"
                type="number"
                placeholder="enter price..."
              />
              <button
                onClick={() => document.getElementById("my_modal_1").close()}
                type="button"
                className="btn btn-primary"
              >
                back
              </button>
              <button type="submit" className="btn btn-secondary btn-add">
                Add to card
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Home;
