import 'mocha';
import { expect } from 'chai';
import { imperialLength } from '../src/modif1';
import { imperialMasa } from '../src/modif1';
import { metricLength } from '../src/modif1';
import { metricMass } from '../src/modif1';
import { Adapter } from '../src/modif1';

describe('prueba modif1', () =>{
  let centimetros = new metricLength(1);
  it('primer test CM a M', () => {
    expect(centimetros.getMetros()).to.be.equal(0.01);
  });

  it('primer test cm a km', () => {
    expect(centimetros.getKM()).to.be.equal(0.000009999999999999999);
  });
    
  let gr = new metricMass(1);
  it('primer test gr a kgr', () => {
    expect(gr.getKiogramos()).to.be.equal(0.001);
  });
  
  it('primer test gr a tn', () => {
    expect(gr.getToneladas()).to.be.equal(0.000001);
  });

  let pulgadas = new imperialLength(1)
  it('primer test pulgadas a yardas', () => {
    expect(pulgadas.getYardas()).to.be.equal(0.0277778);
  });

  it('primer test pulgadas a pies', () => {
    expect(pulgadas.getPies()).to.be.equal(0.0833333);    
  });

  let oz = new imperialMasa(1)
  it('primer test oz a libras', () => {
    expect(oz.getLibras()).to.be.equal(0.0625);    
  });

  it('primer test oz a piedras', () => {
    expect(oz.getPiedras()).to.be.equal(0.00446429);    
  });
  
  let conversion = new Adapter(new metricLength(1))

  it('primer test oz pasar de pulgadas a cm', () => {
    expect(conversion.getData()).to.be.equal(2.54);    
  });

});