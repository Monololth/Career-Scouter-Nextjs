import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "greet1" : "Welcome to",
      "greet2" : "Career Scouter!",
      "description1" : "Placeholder",
      "carpath" : "",
      "quizdesc" : "Below you can take the quiz.",
      "quizcard" : "Access the quiz here!",
      "home" : "Home",
      "careers" : "Careers",
      "quiz" : "Quiz",
      "contact" : "Contact",
      "about" : "About",
      "quiz1" : "Answer the questionaire!",
      "quiz2" : "When you have studied the various career paths, answer this quiz on merit of what is the most interesting for you."
    }
  },
  fi: {
    translation: {
      "Welcome to React": "",
      "greet1" : "Tervetuloa",
      "greet2" : "Career Scouteriin!",
      "description1" : "Placeholder",
      "carpath" : "",
      "quizdesc" : "Alta pääset tekemään kyselyn.",
      "quizcard" : "Tee kysely täältä!",
      "home" : "Koti",
      "careers" : "Ammatit",
      "quiz" : "Kysely",
      "contact" : "Ota Yhteyttä",
      "about" : "About",
      "quiz1" : "Vastaa kyselyyn!",
      "quiz2" : "Kun olet tutkinut eri urapolkuja, vastaa tähän kyselyyn sen perusteella, mikä on sinulle mielenkiintoisinta."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fi", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;