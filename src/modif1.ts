
/**
 * Se trabaja en pulgada
 */
export class imperialLength {
  constructor(private result: number = 0) {}

  getPulgadas():  number {

    return this.result
  }

  getYardas() {
    let result: number = 0
    result = result * 0.0277778;
    return this.result
  }

  getPies() {
    let result: number = 0
    result = result * 0.0833333
    return this.result
  }

  getMillas() {
    let result: number = 0
    result = result * 0.000015782799999999997
    return this.result
  }
}

/**
 * se trabaja oz
 */
export class imperialMasa {
  constructor(private result: number) {}

  getOnzas():  number {
    return this.result
  }

  getLibras() {
    let result: number = 0
    result = result * 0.0625
    return this.result
  }

  getPiedras() {
    let result: number = 0
    result = result * 0.00446429
    return this.result
  }

  getCentenas() {
    let result: number = 0
    result = result * 0.000558036
    return this.result
  }

  getToneladas() {
    let result: number = 0
    result = result * 0.000027901999999999998
    return this.result
  }
}

type conversion = {

}


/**
 * Se trabaja en cm
 */
 export class metricLength {
  constructor(private result: number = 0) {}

  getcm():  number {

    return this.result
  }

  getKM() {
    let result: number = 0
    result = result * 0.000009999999999999999
    return this.result
  }

  getMetros() {
    let result: number = 0
    result = result * 0.01
    return this.result
  }

}



/**
 * Se trabaja en gramos
 */
 export class metricMass {
  constructor(private result: number = 0) {}

  getGramos():  number {

    return this.result
  }

  getKiogramos() {
    let result: number = 0
    result = result * 0.001
    return this.result
  }

  getToneladas() {
    let result: number = 0
    result = result * 0.000001
    return this.result
  }

}


export class Adapter extends imperialLength {
  constructor(private service: metricLength) {
    super();
  }

  getData(): number {
    const pulgada = this.service.getcm() * 2.54;
    return pulgada
  }
/** 
  getData1(): number {
    const oz = this.service1.get() * 2.54;
    return oz
  }
  */
}
