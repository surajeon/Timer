let args = process.argv.slice(2);

const beep = () => {
  for (const time of args) {
    timer(time * 1000);
  };
  const timer = function (time) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(time);
    }, time);
  };
}

beep(args);
