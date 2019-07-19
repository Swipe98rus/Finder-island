//Matrix for developing
// const matrix = [
//     [0,0,0],
//     [0,0,1],
//     [0,1,1]
// ];

//This matrix for filling
const matrix = [
    [],
    [],
    []
]

//For check visited field
const visitedCell = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
];

//Mark field which need to visit
const needToVisitCell = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
];

//Counter for island
let count = 0;

//find 1 in matrix
function finder(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let k = 0; k < mat[i].length; k++) {

            //condition for finding the needed cell
            switch (mat[i][k]) {

                case 1:
                    if (visitedCell[i][k] == false) {
                        count++;
                        console.log('It is 1 and not visited');

                        //Start to checking on nearby cells with 1
                        otherChecks(mat, i, k);
                    }
                    break;

                case 0:
                    visitedCell[i][k] = true;
                    break;

                default:
                    console.log('Default err');
            }
        }
    }

    //Show how much island
    console.log('У нас столько материков - ' + count);
    return count;
}


// ----Additional fun for checking------
function otherChecks(mat, i, k) {

    //Start checking left cell
    if((mat[i][k-1] != null) &&
        (visitedCell[i][k-1] == false) &&
        (mat[i][k-1] == 1)           ){

            //If true, mark same cell in needToVisitCell
             needToVisitCell[i][k-1] = true;
    }

    //Start checking right cell
    if(mat[i][k+1] != null &&
      (visitedCell[i][k+1] == false) &&
      (mat[i][k+1] == 1)             ){

            //If true, mark same cell in needToVisitCell
             needToVisitCell[i][k+1] = true;
    }

    //Start checking top cell
    if(((i-1 >= 0) && (mat[i-1][k] != null)) &&
        (visitedCell[i-1][k] == false) &&
        (mat[i-1][k] == 1)              ){

            //If true, mark same cell in needToVisitCell
             needToVisitCell[i-1][k] = true;
    }

    //Start checking down cell
    if(((i+1 < mat.length) && (mat[i+1][k] != null)) &&
        (visitedCell[i+1][k] == false) &&
        (mat[i+1][k] == 1)             ){

            //If true, mark same cell in needToVisitCell
             needToVisitCell[i+1][k] = true;
    }

    //After checking, mark this cell like visited
    visitedCell[i][k] = true;

    //Check if you need to visit cells
    checkOnNeedToVisitCell(mat);
}


//Fun for checking 'need to visit cell?'
function checkOnNeedToVisitCell(mat) {
    for (let i = 0; i < needToVisitCell.length; i++) {
        for (let k = 0; k < needToVisitCell[i].length; k++) {

            if (needToVisitCell[i][k] == true) {

                //After visiting the cell remove marker 'needToVisitCell'
                needToVisitCell[i][k] = false;

                //Start to checking on nearby cells with 1
                otherChecks(mat, i, k);
            }
        }
    }
}


//Fun for generate random Matrix
function randomMatrix(matrix){
  for(let i = 0; i < matrix.length; i++){
    for(let k = 0; k < 3; k++){
      matrix[i].push(Math.round(Math.random()))
    }
  }
  console.log(matrix);
  finder(matrix);
}

randomMatrix(matrix);

//Код должен работать ---  Done
//Читабельный --- Done
//Комменты на англ --- Done
//Тест который будет генить матрицы для проверки --- Done
