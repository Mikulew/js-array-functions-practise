const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female"
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male"
  }
];

//***MAP***
//1. Get array of all names
const arrayOfNames = characters.map((character) => character.name);
//2. Get array of all heights
const arrayOfHeights = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const arrayOfNamesAndHeights = characters.map(({ name, height }) => ({
  name,
  height
}));
//4. Get array of all first names
const arrayOfFirstLetterName = characters.map(
  (character) => character.name.split("")[0]
);

//***REDUCE***

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);

//***FILTER***
//1. Get characters with mass greater than 100
const greaterThan100MassCharacters = characters.filter(
  (character) => character.mass > 100
);
//2. Get characters with height less than 200
const shorterThan200HeightCharachters = characters.filter(
  (character) => character.height < 200
);
//3. Get all male characters
const onlyMaleCharacters = characters.filter(
  (character) => character.gender === "male"
);
//4. Get all female characters
const onlyFemaleCharacters = characters.filter(
  (character) => character.gender === "female"
);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass);
//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
//3. Sort by name
const byName = characters.sort((a, b) => (a.name < b.name ? -1 : 1));
//4. Sort by gender
const byGender = characters.sort((a, b) => (a.gender === "female" ? -1 : 1));

//***EVERY***
//1. Does every character have blue eyes?
const isOnlyBlueEyed = characters.every(
  (character) => character.eye_color === "blue"
);
//2. Does every character have mass more than 40?
const isMoreMassThan40 = characters.every((character) => character.mass > 40);
//3. Is every character shorter than 200?
const isCharacterShorterThan200 = characters.every(
  (character) => character.height < 200
);
//4. Is every character male?
const isEveryMaleGender = characters.every(
  (character) => character.gender === "male"
);

//***SOME***
//1. Is there at least one male character?
const isMaleCharacter = characters.some(
  (character) => character.gender === "male"
);
//2. Is there at least one character with blue eyes?
const isBlueEyed = characters.some(
  (character) => character.eye_color === "blue"
);
//3. Is there at least one character taller than 210?
const isTallerThan210 = characters.some((character) => character.height > 210);
//4. Is there at least one character that has mass less than 50?
const isCharacterMassCreaterThan50 = characters.some(
  (character) => character.mass < 50
);
