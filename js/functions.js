function create2D(arr, row) {
  for (let i = 0; i < arr.length; i++)
    arr[i] = new Array(row);
  return arr;
}
