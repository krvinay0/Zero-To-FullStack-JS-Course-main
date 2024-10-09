

    const team1 = ["Rohit", "Nehara"];
    const team2 = ["Shivani", "Shivu", "Shivangi"];

    // concat()
    // joins two or more arrays and returns a result
    const cricket = team1.concat(team2);
    console.log(cricket);
    // Output: [ 'Rohit', 'Nehara', 'Shivani', 'Shivu', 'Shivangi' ]

    // includes()
    // checks if an array contains a specified element
    const cricket1 = team1.includes('Rohit');
    console.log(cricket1);
    // Output: true

    // push()
    // adds a new element to the end of an array and returns the new length of an array
    const cricket6 = team1.push('Gupta');
    console.log(team1, cricket6);
    // Output: [ 'Rohit', 'Nehara', 'Gupta' ] 3

    // unshift()
    // adds a new element to the beginning of an array and returns the new length of an array
    const cricket2 = team1.unshift('Sharma');
    console.log(team1, cricket2);
    // Output: [ 'Sharma', 'Rohit', 'Nehara', 'Gupta' ] 4

    // pop()
    // removes the last element of an array and returns the removed element
    const cricket3 = team1.pop();
    console.log(team1, cricket3);
    // Output: [ 'Sharma', 'Rohit', 'Nehara' ] Gupta

    // shift()
    // removes the first element of an array and returns the removed element
    const cricket4 = team1.shift();
    console.log(team1, cricket4);
    // Output: [ 'Rohit', 'Nehara' ] Sharma

    // sort()
    // sorts the elements alphabetically in strings and in ascending order
    const cricket5 = team1.sort();
    console.log(team1, cricket5);
    // Output:  [ 'Nehara', 'Rohit' ] [ 'Nehara', 'Rohit' ]

    // slice()
    // selects the part of an array and returns the new array
    const cricket7 = team2.slice(0, 1);
    console.log(cricket7, team2);
    // Output: [ 'Shivani' ] [ 'Shivani', 'Shivu', 'Shivangi' ]

    // splice()
    // removes or replaces existing elements and / or adds new elements
    const cricket8 = team2.splice(1, 0, "Himanshu");
    console.log(cricket8, team2);
    // Output: [] [ 'Shivani', 'Himanshu', 'Shivu', 'Shivangi' ]

    // join()
    // join all element with '_' and return new array 
    const cricket9 = team2.join('_');
    console.log(cricket9, team2);
    // Output: Shivani_Himanshu_Shivu_Shivangi [ 'Shivani', 'Himanshu', 'Shivu', 'Shivangi' ]


