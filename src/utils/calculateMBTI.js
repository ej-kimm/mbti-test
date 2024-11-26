export default function calculateMBTI(answers) {
  const mbtiCounts = {
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  }

  answers.forEach(({ type, answer }) => {
    const [option1, option2] = type.split('/')
    if (answer === option1) {
      mbtiCounts[option1]++
    } else if (answer === option2) {
      mbtiCounts[option2]++
    }
  })

  const result = `${mbtiCounts.E >= mbtiCounts.I ? 'E' : 'I'}${
    mbtiCounts.S >= mbtiCounts.N ? 'S' : 'N'
  }${mbtiCounts.T >= mbtiCounts.F ? 'T' : 'F'}${
    mbtiCounts.J >= mbtiCounts.P ? 'J' : 'P'
  }`

  return result
}
