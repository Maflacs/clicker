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
    learnings: [
      {
        learningName: { hu: "Beülsz egy tanórára", en: "Attend a class" },
        knowledgePerClickIncrement: 1,
        description: {
          hu: "A tanórán megpróbálsz odafigyelni a tanárra, korlátozott mértékben nő a tudásod.",
          en: "You try to pay attention to the teacher in class, your knowledge increases to a limited extent.",
        },
        amount: 0,
        price: 10,
        link: classImg,
        unlocked: true,
      },
      {
        learningName: { hu: "Megírod a házi feladatodat", en: "Do your homework" },
        knowledgePerClickIncrement: 10,
        description: {
          hu: "Házi feladat írás közben átismétled az órán tanultakat és így közepes mértékben nő a tudásod.",
          en: "While doing your homework, you review what you learned in class, moderately increasing your knowledge.",
        },
        amount: 0,
        price: 200,
        link: homeworkImg,
        unlocked: false,
      },
      {
        learningName: { hu: "Könyvtárba mész", en: "Go to the library" },
        knowledgePerClickIncrement: 25,
        description: {
          hu: "A könyvtár csendjében hatékonyabban tudsz tanulni.",
          en: "You can study more effectively in the silence of the library.",
        },
        amount: 0,
        price: 750,
        link: libraryImg,
        unlocked: false,
      },
      {
        learningName: { hu: "Elmész párbajszakkörre", en: "Attend a duel class" },
        knowledgePerClickIncrement: 100,
        description: {
          hu: "A gyakorlati oktatás nagy mértékben növeli a tudásod.",
          en: "Practical training greatly increases your knowledge.",
        },
        amount: 0,
        price: 4000,
        link: duelClassImg,
        unlocked: false,
      },
      {
        learningName: {
          hu: "Felkészülsz a Rendes bűbájos fokozat vizsgádra",
          en: "Prepare for your Ordinary Wizarding Level exam",
        },
        knowledgePerClickIncrement: 300,
        description: {
          hu: "A magas szintű vizsgára, gyakorlati és elméleti felkészülés is szükséges, ami rendkívüli mértékben növeli a tudásod.",
          en: "Preparing for a high-level exam requires both practical and theoretical preparation, which extraordinarily increases your knowledge.",
        },
        amount: 0,
        price: 15000,
        link: rbfImg,
        unlocked: false,
      },
      {
        learningName: {
          hu: "Felkészülsz a Rémesen Agyfacsaró Varázstani Szigorlat vizsgádra",
          en: "Prepare for your Nastily Exhausting Wizarding Test exam",
        },
        knowledgePerClickIncrement: 1000,
        description: {
          hu: "Az iskolában elérhető legmagasabb szintű vizsgára, gyakorlati és elméleti felkészülés is szükséges, ami varázslatosan nagy mértékben növeli a tudásod.",
          en: "The highest-level exam available at school requires both practical and theoretical preparation, which magically increases your knowledge.",
        },
        amount: 0,
        price: 100000,
        link: ravaszImg,
        unlocked: false,
      },
    ],
    relations: [
    {
      relationName: { hu: "Barátokat szerzel.", en: "Make friends" },
      knowledgePerSecIncrement: 1,
      description: {
        hu: "A barátaid segítségével gyorsabban halad a tanulás.",
        en: "You progress faster in your studies with the help of your friends.",
      },
      amount: 0,
      price: 100,
      link: friendsImg,
      unlocked: true,
    },
    {
      relationName: { hu: "Segítséget kérsz a családodtól.", en: "Ask for help from your family" },
      knowledgePerSecIncrement: 5,
      description: {
        hu: "A szüleid segítenek neked a tanulásban.",
        en: "Your parents help you with your studies.",
      },
      amount: 0,
      price: 1000,
      link: familyImg,
      unlocked: false,
    },
    {
      relationName: { hu: "Tankönyveket vásárolsz.", en: "Buy textbooks" },
      knowledgePerSecIncrement: 10,
      description: {
        hu: "Az új tankönyv új tudást rejteget.",
        en: "New textbooks hide new knowledge.",
      },
      amount: 0,
      price: 3000,
      link: booksImg,
      unlocked: false,
    },
    {
      relationName: { hu: "Különórára mész egy tanárhoz.", en: "Take private lessons with a teacher" },
      knowledgePerSecIncrement: 25,
      description: {
        hu: "Különórán felszedhetsz egy kis extra tudást.",
        en: "You can gain some extra knowledge during private lessons.",
      },
      amount: 0,
      price: 10000,
      link: specialClassImg,
      unlocked: false,
    },
    {
      relationName: {
        hu: "Különórára mész az igazgatóhoz.",
        en: "Take private lessons with the headmaster",
      },
      knowledgePerSecIncrement: 100,
      description: {
        hu: "A nagy tudású igazgató nagy mértékű extra tudást tud átadni neked.",
        en: "The highly knowledgeable headmaster can impart a significant amount of extra knowledge to you.",
      },
      amount: 0,
      price: 50000,
      link: diriImg,
      unlocked: false,
    },
    {
      relationName: {
        hu: "Segítesz az iskola megvédésében.",
        en: "Help defend the school",
      },
      knowledgePerSecIncrement: 250,
      description: {
        hu: "Amikor gonosz varázslók támadnak az iskolára, itt az ideje, hogy bevesd amit eddig tanultál.",
        en: "When evil wizards attack the school, it's time to use what you've learned so far.",
      },
      amount: 0,
      price: 200000,
      link: schoolImg,
      unlocked: false,
    },
  ]
};
}


