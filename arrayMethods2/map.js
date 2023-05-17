let mentors = [
  {
    name: "Israel",
    lastname: "Salinas",
  },
  {
    name: "Charles",
    lastname: "Silva",
  },
];

["Israel Salinas", "Charles Silva"];

/*
const getFullNames = (dataArray) => {
    let fullnames = []
    for( let i = 0; i < dataArray.length; i++){
        let {name, lastname } = dataArray[i]
        let fullname = `${name} ${lastname}`
        fullnames.push(fullname)
        return
    }
    return fullnames
}
*/

const getFullNames = (mentorsArray) => {
  let result = mentorsArray.map((mentor, index, arr) => {
    let { name, lastname } = mentor;
    return `${name} ${lastname}`;
  });
  return result;
};
/*
let result = getFullNames(mentors);
console.log(result);
*/
let people = [
  {
    name: "Israel",
    lastname: "Salinas Martínez",
  },
  {
    name: "Ariana Naomi",
    lastname: "Lopez Puertos",
  },
  {
    name: "Maydeli Berenice",
    lastname: "Sanchez Loera",
  },
];

/*
    Israel Salinas Martínez
     - Israel  -> I
     - Salinas -> S
     - Martínez -> M

     I.S.M.
     */

const getInitials = (fullName) => {
  let fullNameArray = fullName.split(" ");
  console.log(fullNameArray);
  let initialsArray = fullNameArray.map((word) => word.charAt(0).toUpperCase());
  console.log(initialsArray);
  let initialsString = initialsArray.join(". ");
  console.log(initialsString);
  return initialsString + ".";
};

const getAllInitials = (namesArray) => {
  let result = namesArray.map((item) => {
    let { name, lastname } = item;
    let fullName = `${name} ${lastname}`;
    return getInitials(fullName);
  });
  return result;
};

console.log(getAllInitials(people));

//console.log(getInitials("Ariana Naomi Lopez Puertos"));
