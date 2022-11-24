const args = (process.argv).slice(2);

for (let seconds of args) {
  if (seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * seconds);
  }
};