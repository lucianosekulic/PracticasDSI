
/**
 * Se trabaja en pulgada
 */
export class imperialLength {
  constructor(private result: number = 0) {}

  getPulgadas():  number {

    return this.result
  }

  getYardas() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.0277778;
    return resultadoFinal
  }

  getPies() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.0833333
    return resultadoFinal
  }

  getMillas() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.000015782799999999997
    return resultadoFinal
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
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.0625
    return resultadoFinal
  }

  getPiedras() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.00446429
    return resultadoFinal
  }

  getCentenas() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.000558036
    return resultadoFinal
  }

  getToneladas() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.000027901999999999998
    return resultadoFinal
  }
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
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.000009999999999999999
    return resultadoFinal
  }

  getMetros() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.01
    return resultadoFinal
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
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.001
    return resultadoFinal
  }

  getToneladas() {
    let resultadoFinal: number = 0
    resultadoFinal = this.result * 0.000001
    return resultadoFinal
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

  getData1(): number {
    const pulgada1 = this.service.getMetros() * 0.0254;
    return pulgada1
  }

}
