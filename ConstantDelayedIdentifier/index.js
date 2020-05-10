const allStates = ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

const sortByNameLength = (states, ascYN) => {
  states.sort( (a, b) => {           // sort array by length of text
            if (ascYN) return a.length - b.length;      // ASC -> a - b
            else return b.length - a.length || a.localeCompare(b);            // DESC -> b - a  || sort by alphabet
        });
  return states;
}

const sorted = sortByNameLength(allStates, false);
console.log(sorted);

