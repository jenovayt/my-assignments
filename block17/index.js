// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
      return this.data.length
    }
    printNumbers() {
    return this.data.forEach(numPrint => {
      console.log(numPrint)   
      });
    }
    odds() {
      let oddNumbers = [];
      this.data.forEach(num => {
        if (num % 2 !== 0) {
          oddNumbers.push(num);
        }
      });
      return oddNumbers;
    }
    evens() {
      let evenNumbers = [];
      this.data.forEach(num => num % 2 === 0 ? evenNumbers.push(num) : null)

      return evenNumbers;
    }
    sum() {
      let total = 0;
      for(let i = 0; i < this.data.length; i++) {
        total += this.data[i]
      }
      return total;
    }
    product() {
      let total = 1;
      for(let i = 0; i < this.data.length; i++) {
        total *= this.data[i]
      }
      return total;
    }
    greaterThan(target) { 
      let greaterThanNumbers = [];
      this.data.forEach(num => num > target ? greaterThanNumbers.push(num) : null);
      return greaterThanNumbers;
    }
    howMany(target) {
      let howManyDuplicates = {};
      this.data.forEach(num => howManyDuplicates[num] ? howManyDuplicates[num]++ : howManyDuplicates[num]=1);
      return howManyDuplicates[target];
    }
  }
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number