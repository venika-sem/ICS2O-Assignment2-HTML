/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function calculates the area of a square.
 */
function calculate() {
  // input
  const sideValue = parseInt(document.getElementById('side-value').value)

   // process
  const area = sideValue * sideValue

  // output
  document.getElementById('area').innerHTML = '<p>Area is: ' + area.toFixed(2) + ' cm²</p>'
}