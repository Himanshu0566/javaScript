function closure() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner();
}

closure();
closure();
closure();
