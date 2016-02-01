export default function Enum(enumLiterals: any): Class<any> {
  let canConstruct = true;
  let c = class EnumClass {
    sym: Symbol;
    value: number;
    description: string;
    constructor(name: string, {value, description}) {
      if (canConstruct) {
        this.sym = Symbol.for(name);
        if(!Object.is(value, undefined)) this.value  = value;
        if(description) this.description  = description;

        Object.freeze(this);

      } else {
        throw new Error("Cannot create a new element of EnumClass");
      }
    }

    get display() {
        return this.description || Symbol.keyFor(this.sym);
    }

    toString() {
        return this.sym;
    }

    valueOf() {
        return this.value;
    }

    static symbols() {
        return Object.keys(c).map(key => c[key]);
    }

    static keys() {
        return Object.keys(c);
    }

    static contains(sym) {
        if (!(sym instanceof c)) return false;
        return this[Symbol.keyFor(sym.sym)] === sym;
    }
  }
  for (let key in enumLiterals) {
    if(!enumLiterals[key]) throw new TypeError('each enum should have been initialized with atleast empty {} value');
    c[key] =  new c(key, enumLiterals[key]);
  }
  Object.freeze(c);
  return c;
}
