//IMPORT ANIMALS
import Alligator from './alligator.js'
import Bat from './bat.js';
import Cat from './cat.js';
import Deer from './deer.js';
import Eagle from './eagle.js';
import Falcon from './falcon.js';
import Gecko from './gecko.js';
import Hamster from './hamster.js';
import Iguana from './iguana.js';
import Jellyfish from './jellyfish.js';
import Kangaroo from './kangaroo.js';
import Leopard from './leopard.js';
import Monkey from './monkey.js';
import Newt from './newt.js';
import Octopus from './octopus.js';
import Pig from './pig.js';
import Quail from './quail.js';
import Rabbit from './rabbit.js';
import Salamander from './salamander.js';
import Tortoise from './tortoise.js';
import Umbrellabird from './umbrellabird.js';
import Vulture from './vulture.js';
import Walrus from './walrus.js';
import xRayTetra from './xraytetra.js';
import Yak from './yak.js';
import Zebra from './zebra.js';

let alligator = new Alligator(6, 200, 40, 'alligator', true)
let bat = new Bat(1, 4, 25, 'bat', true)
let cat = new Cat(5, 3, 1, 'cat', false)
let deer = new Deer(3, 5, 6, 'deer', false)
let eagle = new Eagle(5, 2, 5, 'eagle', false)
let falcon = new Falcon(1, 7, 8, 'falcon', true)
let gecko = new Gecko(1, 8, 4, 'gecko', true)
let hamster = new Hamster(8, 2, 5, 'hamster', true)
let iguana = new Iguana(0, 1, 0, 'iguana', false)
let jellyfish = new Jellyfish(22, 7, 3, 'jellyfish', true)
let kangaroo = new Kangaroo(12, 3, 12, 'kangaroo', false)
let leopard = new Leopard(12312, 312, 31, 'leopard', false)
let monkey = new Monkey(234234, 2342, 23, 'monkey', true)
let newt = new Newt(1313, 5, 4, 'newt', false)
let octopus = new Octopus(23, 65, 45, 'octopus', true)
let pig = new Pig(2, 7, 5, 'pig', true)
let quail = new Quail(2, 3, 4, 'quail', false)
let rabbit = new Rabbit(4, 3, 2, 'rabbit', false)
let salamander = new Salamander(7, 2, 4, 'salamander', true)
let tortoise = new Tortoise(8, 4, 6, 'tortoise', true)
let umbrellabird = new Umbrellabird(1, 8, 9, 'umbrellabird', true)
let vulture = new Vulture(9, 6, 2, 'vulture', false)
let walrus = new Walrus(7, 3, 5, 'walrus', false)
let xraytetra = new xRayTetra(1, 8, 6, 'xraytetra', true)
let yak = new Yak(6, 3, 5, 'yak', true)
let zebra = new Zebra(2, 3, 7, 'zebra', false)

let animalArray = [alligator, bat, cat, deer, eagle, falcon, gecko, hamster, iguana, jellyfish, kangaroo, leopard, monkey, newt, octopus, pig, quail, rabbit, salamander, tortoise, umbrellabird, vulture, walrus, xraytetra, yak, zebra]

function isAnimalCool(animalArr) {
  animalArr.map(animal => {
    if (animal.isCool == true)
      console.log(`${animal.name}: cool animal`)
    else {
      console.log(`${animal.name}: not a cool animal`)
    }
  })
}
isAnimalCool(animalArray)