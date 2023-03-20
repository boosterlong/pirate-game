export const sharkStory = [
  {
    buttonText: "The End",
    prompt: "You win!"
  },
  {
    buttonText: "Accept Quest",
    prompt: "A shark arrives!"
  },
  {
    buttonText: "Fight Shark",
    prompt: "You beat it!"
  },
]

export function getNextEncounter(encounter, index) {
  if (index < encounter.length){
    return (encounter[index])
  } else {
    return (encounter[0])
  }
}