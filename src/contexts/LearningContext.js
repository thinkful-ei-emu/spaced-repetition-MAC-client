import React from 'react'

const LearningContext = React.createContext({
  nextWord: null,
  wordCorrectCount: null,
  wordIncorrectCount: null,
  totalScore: null,
  setAnswer: () => {}, 
  setHead : () => {},
})

export default LearningContext;