//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var input = "";
//
//process.stdin.on('data', function (data) {
//    input += data;
//});
//
//process.stdin.on('end', function () {
//    console.log(input);
//});
console.log('Hello World!');

class PlayBoy {
  constructor(name) {
    this.name = name;
    this.queue = [];

  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(new PlayBoy('name')), time);
    })
  }

  play(action) {
    console.log(`${this.name}在玩${action}`);
    return this;
  }

  sayHi() {
    console.log(`大家好，我交${this.name}`);
    return this;
  }
}

const boy = new PlayBoy('小明');
// boy.sayHi().play('王者荣耀');
boy.sleep(5).sayHi().sleep(3).play('王者荣耀')


class PlayBoy {
  constructor(name) {
    this.name = name;
    this.queue = [];
    setTimeout(async () => {
      while (this.queue.length !== 0) {
        await this.queue.shift();
      }
    })
  }

  sleep(time) {
    this.queue.push(() => {
      new Promise((resolve) => {
        setTimeout(resolve, time);
      })
    });
    return this;
  }

  play(action) {
    this.queue.push(() => console.log(`${this.name}在玩${action}`))
    return this;
  }

  sayHi() {
    this.queue.push(() => console.log(`大家好，我交${this.name}`))
    return this;
  }

}

const boy = new PlayBoy('小明');
// boy.sayHi().play('王者荣耀');
boy.sleep(5).sayHi().sleep(3).play('王者荣耀')


