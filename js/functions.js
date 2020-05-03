function create2D(arr) {
  for (let i = 0; i < arr.length; i++)
    arr[i] = new Array(arr.length);
  return arr;
}
