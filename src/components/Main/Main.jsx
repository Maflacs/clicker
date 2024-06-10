import React from "react";
import Modal from "../Modals/Modal/Modal";
import "./Main.css";
import Learnings from "../Learnings/Learnings";
import LevelUpComponent from "../LevelUpComponent/LevelUpComponent";
import Timer from "../Timer/Timer";
import ClickArea from "../ClickArea/ClickArea";
import Knowledge from "../Knowledge/Knowledge";
import Relations from "../Relations/Relations";
import {
  handleKnowledgeClicked,
  handleLearningsClicked,
  handleRelationsClicked,
  handleLevelUp,
  closeModal,
} from "../../utils/gameFunctions";

const Main = ({
  setModalOpen,
  knowledge,
  color,
  lang,
  learnings,
  level,
  setLevel,
  modalOpen,
  sec,
  state,
  setState,
  relations,
}) => {

  const formatPrice = (price) => {
    if (price < 1000) return price;
    let kValue = Math.ceil(price / 1000);
    return `${kValue}K`;
  };

  return (
    <main className="main-container">
      <section className="inventory-container perclick">
        <Learnings
          setModalOpen={setModalOpen}
          knowledge={knowledge}
          color={color}
          lang={lang}
          learnings={learnings}
          onClick={(index) =>
            handleLearningsClicked(index, state, setState, setModalOpen)
          }
          formatPrice={formatPrice}
        />
      </section>
      <section className="clicking-area-container xp">
        <LevelUpComponent
          knowledge={knowledge}
          onLevelUp={(requiredPoints) =>
            handleLevelUp(requiredPoints, setState, setLevel)
          }
          level={level}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          lang={lang}
        />
        <Timer lang={lang} sec={sec} />
        <ClickArea onKnowledgeClick={() => handleKnowledgeClicked(setState)} />
        <Knowledge state={state} lang={lang} />
      </section>
      <section className="inventory-container persec">
        <Relations
          color={color}
          lang={lang}
          relations={relations}
          onClick={(index) =>
            handleRelationsClicked(index, state, setState, setModalOpen)
          }
          setModalOpen={setModalOpen}
          knowledge={knowledge}
          formatPrice={formatPrice}
        />
      </section>
      {modalOpen && (
        <Modal
          color={color}
          lang={lang}
          onClose={() => closeModal(setModalOpen)}
        />
      )}
    </main>
  );
};

export default Main;
