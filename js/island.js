// SAMPLE WHITEBOARD

/*

Input: 2-d array of 0s and 1s 
Output: Number of islands 

Input: 

[
    [0,0,1,0,0,0],
    [0,1,1,1,0,0],
    [0,0,0,0,0,0],
    [0,0,1,1,1,0],
    [0,0,1,0,0,1],
    [0,0,1,0,0,1]
]

Output: 3

Input: 

[
    [0,0],
    [0,0]
]

Output: 0

Input: 

[
    [0,0,0,0,0,0],
    [0,1,1,1,1,1],
    [0,1,0,0,0,1],
    [0,1,0,1,0,1],
    [0,1,0,0,0,1],
    [0,1,1,1,1,1]
]

Output: 2



Notes: 
- Islands are bodies of 1s that that do connect 
  with other 1s; not separated by 0s 
- Connections - cardinal directions
- 1s => land 
- 0s => water 
- Expect valid input 
- double nested for loop to iterate through each cell 
- perform dfs through each group of 1s 


count = 3

x -> 
[
    [0,0,1,0,0,0],
    [0,1,1,1,0,0],
    [0,0,0,0,0,0],
    [0,0,1,1,1,0],
    [0,0,1,0,0,1],
    [0,0,1,0,0,1]
]

copy = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]

y
|
v



                            x,y
                            2,0
            /           /               \           \
          3,0X        1,0X              2,1          2,-1X
                        /         /         \       \
                     3,1        1,1          2,2X     2,0X

- count = 0

- copy the matrix 

- double nested for loop through copy 
    - if cell is 1, 
        - increment count 
        - perform dfs to convert connected land 



dfs 

base cases: 
- out of bounds 
- on water 
- traveling to already visited position (turned to water already) 

action: 
- toggle cell to 0

recursive cases: 
- up
- down
- left
- right 


*/



function countIslands(matrix) {
    let count = 0;

    let copy = [];

    for (let y = 0; y < matrix.length; y++) {
        copy.push([]);
        for (let x = 0; x < matrix[0].length; x++) {
            copy[y].push(matrix[y][x]);
        }
    }

    console.log("COPY: ", copy);

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (copy[y][x] === 1) {
                count++;
                dfs(x, y);
                console.log("COUNT: ", count);
                console.log("COPY: ", copy);
            }
        }
    }

    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= copy[0].length || y >= copy.length) {
            return;
        }
        if (copy[y][x] === 0) {
            return;
        }

        copy[y][x] = 0;

        dfs(x+1, y);
        dfs(x-1, y);
        dfs(x, y+1);
        dfs(x, y-1);
    }




    return count;
}


let test = [
    [0,0,1,0,0,0],
    [0,1,1,1,0,0],
    [0,0,0,0,0,0],
    [0,0,1,1,1,0],
    [0,0,1,0,0,1],
    [0,0,1,1,1,1]
];

console.log("RESULT: ", countIslands(test));
