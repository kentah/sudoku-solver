import { GRID } from 'typings'


/**
 * A function to check if the grid is full 
 * @parm grid A 9X9 array consisting of values from 0 to 9
 */

function checkGrid(grid: GRID): boolean {
  for (let i=0; i<9; i++)
    for (let j=0; j<9; j++)
      if(grid[i][j] === 0) return false
  return true
}

export default checkGrid
