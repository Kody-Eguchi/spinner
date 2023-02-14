const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for (const i in arr) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}   `);
  }, 200 * i);
}




