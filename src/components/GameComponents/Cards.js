import { useState } from "react";
import Card from "./Card";
function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "./fire.png", stat: "" },
      { id: 1, img: "./fire.png", stat: "" },
      { id: 2, img: "./fighting.png", stat: "" },
      { id: 2, img: "./fighting.png", stat: "" },
      { id: 3, img: "./grass.png", stat: "" },
      { id: 3, img: "./grass.png", stat: "" },
      { id: 4, img: "./ice.png", stat: "" },
      { id: 4, img: "./ice.png", stat: "" },
      { id: 5, img: "./water.png", stat: "" },
      { id: 5, img: "./water.png", stat: "" },
      { id: 6, img: "./normal.png", stat: "" },
      { id: 6, img: "./normal.png", stat: "" },
      { id: 7, img: "./rock.png", stat: "" },
      { id: 7, img: "./rock.png", stat: "" },
      { id: 8, img: "./steel.png", stat: "" },
      { id: 8, img: "./steel.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);

      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);

      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);

      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
