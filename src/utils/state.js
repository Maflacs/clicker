import classImg from "../img/class.png";
import homeworkImg from "../img/homework.png";
import libraryImg from "../img/library.png";
import duelClassImg from "../img/duel class.png";
import rbfImg from "../img/RBF.png";
import ravaszImg from "../img/RAVASZ.png";
import friendsImg from "../img/Friends.png";
import familyImg from "../img/Family.png";
import booksImg from "../img/books.png";
import specialClassImg from "../img/special_class.png";
import diriImg from "../img/diri.png";
import schoolImg from "../img/school.png";

export const CHANGE_TYPE = {
  LEARNING: "LEARNING",
  RELATION: "RELATION",
  TIME: "TIME",
  KNOWLEDGE: "KNOWLEDGE",
  ALL: "ALL",
};

export const getInitialState = () => {
  return {
    intervalId: null,
    startTimestamp: new Date().getTime(),
    sec: 0,
    knowledge: 0,
    knowledgePerClick: 1,
    knowledgePerSec: 0,
    hu: {
      learning: [
        {
          learningName: "Beülsz egy tanórára",
          knowledgePerClickIncrement: 1,
          description:
            "A tanórán megpróbálsz odafigyelni a tanárra, korlátozott mértékben nő a tudásod.",
          amount: 0,
          price: 10,
          link: classImg,
          unlocked: true,
        },
        {
          learningName: "Megírod a házi feladatodat",
          knowledgePerClickIncrement: 10,
          description:
            "Házi feladat írás közben átismétled az órán tanultakat és így közepes mértékben nő a tudásod.",
          amount: 0,
          price: 200,
          link: homeworkImg,
          unlocked: false,
        },
        {
          learningName: "Könyvtárba mész",
          knowledgePerClickIncrement: 25,
          description: "A könyvtár csendjében hatékonyabban tudsz tanulni.",
          amount: 0,
          price: 750,
          link: libraryImg,
          unlocked: false,
        },
        {
          learningName: "Elmész párbajszakkörre",
          knowledgePerClickIncrement: 100,
          description: "A gyakorlati oktatás nagy mértékben növeli a tudásod.",
          amount: 0,
          price: 4000,
          link: duelClassImg,
          unlocked: false,
        },
        {
          learningName: "Felkészülsz a Rendes bűbájos fokozat vizsgádra",
          knowledgePerClickIncrement: 300,
          description:
            "A magas szintű vizsgára, gyakorlati és elméleti felkészülés is szükséges, ami rendkívüli mértékben növeli a tudásod.",
          amount: 0,
          price: 15000,
          link: rbfImg,
          unlocked: false,
        },
        {
          learningName:
            "Felkészülsz a Rémesen Agyfacsaró Varázstani Szigorlat vizsgádra",
          knowledgePerClickIncrement: 1000,
          description:
            "Az iskolában elérhető legmagasabb szintű vizsgára, gyakorlati és elméleti felkészülés is szükséges, ami varázslatosan nagy mértékben növeli a tudásod.",
          amount: 0,
          price: 100000,
          link: ravaszImg,
          unlocked: false,
        },
      ],
      relations: [
        [
          {
            relationName: "Barátokat szerzel.",
            knowledgePerSecIncrement: 1,
            description: "A barátaid segítségével gyorsabban halad a tanulás.",
            amount: 0,
            price: 100,
            link: friendsImg,
            unlocked: true,
          },
          {
            relationName: "Segítséget kérsz a családodtól.",
            knowledgePerSecIncrement: 5,
            description: "A szüleid segítenek neked a tanulásban.",
            amount: 0,
            price: 1000,
            link: familyImg,
            unlocked: false,
          },
          {
            relationName: "Tankönyveket vásárolsz.",
            knowledgePerSecIncrement: 10,
            description: "Az új tankönyv új tudást rejteget.",
            amount: 0,
            price: 3000,
            link: booksImg,
            unlocked: false,
          },
          {
            relationName: "Különórára mész egy tanárhoz.",
            knowledgePerSecIncrement: 25,
            description: "Különórán felszedhetsz egy kis extra tudást.",
            amount: 0,
            price: 10000,
            link: specialClassImg,
            unlocked: false,
          },
          {
            relationName: "Különórára mész az igazgatóhoz.",
            knowledgePerSecIncrement: 100,
            description:
              "A nagy tudású igazgató nagy mértékű extra tudást tud átadni neked.",
            amount: 0,
            price: 50000,
            link: diriImg,
            unlocked: false,
          },
          {
            relationName: "Segítesz az iskola megvédésében.",
            knowledgePerSecIncrement: 250,
            description:
              "Amikor gonosz varázslók támadnak az iskolára, itt az ideje, hogy bevesd amit eddig tanultál.",
            amount: 0,
            price: 200000,
            link: schoolImg,
            unlocked: false,
          },
        ],
      ],
    },
    en: {
      learning: [
        {
          learningName: "Attend a classroom session",
          knowledgePerClickIncrement: 1,
          description:
            "You try to pay attention to the teacher during the class, increasing your knowledge to a limited extent.",
          amount: 0,
          price: 10,
          link: classImg,
          unlocked: true,
        },
        {
          learningName: "Write your homework",
          knowledgePerClickIncrement: 10,
          description:
            "While writing homework, you review what you learned in class, increasing your knowledge moderately.",
          amount: 0,
          price: 200,
          link: homeworkImg,
          unlocked: false,
        },
        {
          learningName: "Go to the library",
          knowledgePerClickIncrement: 25,
          description:
            "You can study more effectively in the quiet of the library.",
          amount: 0,
          price: 750,
          link: libraryImg,
          unlocked: false,
        },
        {
          learningName: "Join a duel class",
          knowledgePerClickIncrement: 100,
          description:
            "Practical training significantly increases your knowledge.",
          amount: 0,
          price: 4000,
          link: duelClassImg,
          unlocked: false,
        },
        {
          learningName: "Prepare for the Ordinary Charms Degree exam",
          knowledgePerClickIncrement: 300,
          description:
            "High-level exam requires both practical and theoretical preparation, significantly increasing your knowledge.",
          amount: 0,
          price: 15000,
          link: rbfImg,
          unlocked: false,
        },
        {
          learningName:
            "Prepare for the Dreadfully Mind-Boggling Wizardry Exam",
          knowledgePerClickIncrement: 1000,
          description:
            "The highest-level exam available at the school requires both practical and theoretical preparation, magically increasing your knowledge.",
          amount: 0,
          price: 100000,
          link: ravaszImg,
          unlocked: false,
        },
      ],
      relations: [
        {
          relationName: "Make friends",
          knowledgePerSecIncrement: 1,
          description:
            "You progress faster in your studies with the help of your friends.",
          amount: 0,
          price: 100,
          link: friendsImg,
          unlocked: true,
        },
        {
          relationName: "Ask for help from your family",
          knowledgePerSecIncrement: 5,
          description: "Your parents help you with your studies.",
          amount: 0,
          price: 1000,
          link: familyImg,
          unlocked: false,
        },
        {
          relationName: "Buy textbooks",
          knowledgePerSecIncrement: 10,
          description: "New textbooks hide new knowledge.",
          amount: 0,
          price: 3000,
          link: booksImg,
          unlocked: false,
        },
        {
          relationName: "Take private lessons with a teacher",
          knowledgePerSecIncrement: 25,
          description:
            "You can gain some extra knowledge during private lessons.",
          amount: 0,
          price: 10000,
          link: specialClassImg,
          unlocked: false,
        },
        {
          relationName: "Take private lessons with the headmaster",
          knowledgePerSecIncrement: 100,
          description:
            "The highly knowledgeable headmaster can impart a significant amount of extra knowledge to you.",
          amount: 0,
          price: 50000,
          link: diriImg,
          unlocked: false,
        },
        {
          relationName: "Help defend the school",
          knowledgePerSecIncrement: 250,
          description:
            "When evil wizards attack the school, it's time to use what you've learned so far.",
          amount: 0,
          price: 200000,
          link: schoolImg,
          unlocked: false,
        },
      ],
    },
  };
};
