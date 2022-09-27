const symbols = '|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|';
let delay = 0;
const rewrite = '\r';
for (let char of symbols) {
  setTimeout(() => {
    process.stdout.write(rewrite + char);
  }, delay);
  delay += 200;
};