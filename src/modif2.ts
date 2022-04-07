

interface tipoPokemones {
  getName(): string;
  getWeigth(): number;
  getSize(): number;
  getType(): string;
}

export abstract class creadorFabricaPokemon {
    public abstract factoryMethod(): any;

    public poke(): Pokemon {
        const pokemones = this.factoryMethod();
        return pokemones.getName() + pokemones.getWeigth() + pokemones.getSize() + pokemones.getType();
    }
}


/**
 * clase pokemon donde le ponemos las estadisticas requeridas para el combate
 */
 export class Pokemon extends creadorFabricaPokemon {
  
    constructor(private name: string, private weigth: number, private size: number, private type: string) {
      super();
    }

    public factoryMethod(): tipoPokemones {
      return new Pokemon(this.name, this.weigth, this.size, this.type);
    }

    //getters
    public getName() {
      return this.name;
    }
  
    public getWeigth() {
      return this.weigth;
    }
  
    public getSize() {
      return this.size;
    }
  
    public getType() {
      return this.type;
    }
  

    //setters
    public setName(name: string) {
      this.name = name; 
    }
  
    public setWeigth(weigth: number) {
      this.weigth = weigth;
    }
  
    public setSize(size: number) {
      this.size = size;
    }
  
    public setType(type: string) {
      this.type = type;
    }
}

export class pokeAgua implements tipoPokemones{
  constructor(private name: string, private weigth: number, private size: number, private type: string){}

  
    //getters
    public getName() {
      return this.name;
    }
  
    public getWeigth() {
      return this.weigth;
    }
  
    public getSize() {
      return this.size;
    }
  
    public getType() {
      return this.type;
    }
  

    //setters
    public setName(name: string) {
      this.name = name; 
    }
  
    public setWeigth(weigth: number) {
      this.weigth = weigth;
    }
  
    public setSize(size: number) {
      this.size = size;
    }
  
    public setType(type: string) {
      this.type = type;
    }
}

export class pokeElectrico implements tipoPokemones{
  constructor(private name: string, private weigth: number, private size: number, private type: string){}

  
    //getters
    public getName() {
      return this.name;
    }
  
    public getWeigth() {
      return this.weigth;
    }
  
    public getSize() {
      return this.size;
    }
  
    public getType() {
      return this.type;
    }
  

    //setters
    public setName(name: string) {
      this.name = name; 
    }
  
    public setWeigth(weigth: number) {
      this.weigth = weigth;
    }
  
    public setSize(size: number) {
      this.size = size;
    }
  
    public setType(type: string) {
      this.type = type;
    }
}



