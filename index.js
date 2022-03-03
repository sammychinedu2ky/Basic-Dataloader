let info = {
  1: {
    name: "samson",
    age: 23,
  },
  2: {
    name: "chike",
    age: 20,
  },
};

class Loader {
  keys = [];
  async load(key) {
    let p = new Promise((res) => {
      this.keys.push({ res, key });
    });
    return p;
  }
  constructor() {
    process.nextTick(async () => {
      setTimeout(() => {
        for (let l in this.keys) {
          this.keys[l].res(info[this.keys[l].key]);
        }
      }, 1000);
    });
  }
}
let myLoader = new Loader();
myLoader.load(1).then((i) => {
  console.log(i);
});
myLoader.load(2).then((i) => {
  console.log(i);
});
