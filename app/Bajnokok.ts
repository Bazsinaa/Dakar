export default class Bajnokok {
  #év: number;
  #autóVersenyző: string;
  #autóTípus: string;
  #motorVersenyző: string;
  #motorTípus: string;
  #kamionVersenyző: string;
  #kamionTípus: string;

  get autóOrszág(): string {
    return this.#autóVersenyző.split(" ")[0];
  }

  get motorOrszág(): string {
    return this.#motorVersenyző.split(" ")[0];
  }

  get kamionOrszág(): string {
    return this.#kamionVersenyző.split(" ")[0];
  }

  get év(): number {
    return this.#év
  }

  constructor(adatsor: string) {
    const m: string[] = adatsor.split(";");
    this.#év = parseInt(m[0]);
    this.#autóVersenyző = m[1];
    this.#autóTípus = m[2];
    this.#motorVersenyző = m[3];
    this.#motorTípus = m[4];
    this.#kamionVersenyző = m[5];
    this.#kamionTípus = m[5];
  }
}
