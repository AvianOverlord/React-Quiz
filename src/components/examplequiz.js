import React from "react";
import Quiz from "../pages/quiz";


const exampleQuiz = {
    quizName : "Revolutions Quiz",
    quizDesc : "Test your knowledge of world revolutions.",
    questions : [
        {question: "Which British monarch was overthrown in favor of a republic?", answers: ["Charles I", "Charles II", "James I", "Edward VII"], correct: 0},
        {question: "The Maderistas fought to overthrow the dictator of Mexico, Profirio Diaz, under the very same slogan he had once used. What was it?", answers: ["Viva Mexico!", "Liberty and equality!", "Peace and bread!", "No reelection!"], correct: 3},
        {question: "In 1870, the French legislature was planning on restoring the Bourbon monarchy. What made them decide to found a republic instead?", answers: ["They didn't have the funds for a coronation.","The Bourbon pretender insisted on removing the French Tricolor flag.", "They were in conflict with the Pope, and the Bourbons were strong catholics.", "Versailles was captured by the Paris Commune."], correct: 1},
        {question: "Which of the following facts about the Mexican revolutionary Pancho Villa is false?", answers: ["He escaped from prison by recruiting the prison clerk into his revolution, who disguised him as his own lawyer.", "He escaped assassination by diving out the window of his hotel, and hiding under a bridge.", "He and his men inflitrated a fortified city by riding a train on it's regular schedule, sending fake all clear signals to the train office.", "He starred in the first full length Hollywood movie, wearing a costume provided by the film studio in battle."], correct: 1},
        {question: "Which of the original thirteen states was the last to ratify the US Constitution?", answers: ["Rhode Island", "Maryland", "South Carolina", "New Hampshire"], correct: 0},
        {question: "Tsar Nicholas II of Russia earned his nickname of 'Bloody Nicholas' by doing what?", answers: ["Ordering his troops to fire on protesters during 'Bloody Sunday'.", "Attending a gala at the French embassy after an accident at a festival killed over a thousand people.", "Supporting the Black Hundreds, mobs that attacked democratic protesters and Jews.", "Personally leading the Russian army to a bloody defeat in World War One."], correct: 1},
        {question: "During the American Revolution, the United States was represented not as a Bald Eagle, but with what animal?", answers: ["Turkey", "Moose", "Rattlesnake", "Donkey"], correct: 2},
        {question: "The Latin American state of Gran Colombia split apart into which countries shortly after winning independence?", answers: ["Colombia, Mexico, and Venezuela", "Colombia, Boliva, and Ecuador", "Colombia, Haiti, and Panama", "Colombia, Venezuela, and Ecuador"], correct: 3},
        {question: "Which other revolution occured during the French Revolution?", answers: ["Haitian", "Russian", "Italian", "American"], correct: 0},
        {question: "During the French revolution, which of the following people was guillotined last?", answers: ["Thomas Paine", "Marie Antoinette", "George Danton", "King Louis XVI"], correct: 2}
    ]
};

export default exampleQuiz;