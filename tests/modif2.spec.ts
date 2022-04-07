import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../src/modif2';
//import { creadorFabricaPokemon } from '../src/modif2';


describe('Pruebas de pikachu', () => {

    const Pikachu: Pokemon = new Pokemon("Pikachu", 6.0, 0.4, "electrico");

    it('Pikachu.getName() devuelve Pikachu', () => {
      expect(Pikachu.getName()).to.be.deep.equal(`Pikachu`);
    });

    it('Pikachu.getWeight() devuelve 6.0', () => {
        expect(Pikachu.getWeigth()).to.be.deep.equal(6.0);
    });
  
    it('Pikachu.getHeight() devuelve 0.4', () => {
        expect(Pikachu.getSize()).to.be.deep.equal(0.4);
    });
  
    it('Pikachu.getType() devuelve electrico', () => {
        expect(Pikachu.getType()).to.be.deep.equal(`electrico`);
    });

});

describe('Pruebas de cocodrile', () => {

    const cocodrile: Pokemon = new Pokemon("cocodrile", 6.0, 0.4, "agua");

    it('cocodrile.getName() devuelve cocodrile', () => {
      expect(cocodrile.getName()).to.be.deep.equal(`cocodrile`);
    });

    it('cocodrile.getWeight() devuelve 6.0', () => {
        expect(cocodrile.getWeigth()).to.be.deep.equal(6.0);
    });
  
    it('cocodrile.getHeight() devuelve 0.4', () => {
        expect(cocodrile.getSize()).to.be.deep.equal(0.4);
    });
  
    it('cocodrile.getType() devuelve electrico', () => {
        expect(cocodrile.getType()).to.be.deep.equal(`agua`);
    });

});
/*
describe('Pruebas de clase creadorFabricaPokemon', () => {
    const pokemon = new ();
    const pokemones: Pokemon = this.poke();
    it('ver si es de tipo poke', () => {
        expect(pokemones).to.be.instanceOf(Pokemon);
    });
});
*/




