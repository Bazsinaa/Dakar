import fs from "fs";
import Bajnokok from "@/app/Bajnokok";

export default class Megoldás {
  #bajnokok: Bajnokok[] = [];

  get bajnokokSzáma(): number {
    return this.#bajnokok.length * 3;
  }

  get franciákAránya(): number {
    let franciákSzáma: number = 0;
    for (const b of this.#bajnokok) {
      if (b.autóOrszág == "Franciaország") franciákSzáma += 1;
      if (b.motorOrszág == "Franciaország") franciákSzáma += 1;
      if (b.kamionOrszág == "Franciaország") franciákSzáma += 1;
    }
    return Math.round((franciákSzáma / this.bajnokokSzáma) * 10000) / 100;
  }

  get voltAzonosGyőztes(): string {
    for (const b of this.#bajnokok) {
      if (b.autóOrszág == b.kamionOrszág && b.kamionOrszág == b.motorOrszág)
        return "Volt ilyen év.";
    }
    return "Nem volt ilyen év.";
  }

  get #kimaradtÉvek(): number[] {
    const megrendezve: number[] = [];
    for (const b of this.#bajnokok) {
      megrendezve.push(b.év);
    }
  }

  constructor(forrás: string) {
    const sorork: string[] = fs.readFileSync(forrás).toString().split("\n");
    for (const sor of sorork.slice(1)) {
      const aktsor: string = sor.trim();
      this.#bajnokok.push(new Bajnokok(aktsor));
    }
  }
}
