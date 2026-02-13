import Megoldás from "@/app/Megoldás";

export default function HomePage() {
  const m: Megoldás = new Megoldás("dakar.txt");

  return (
    <div>
      <p>2. feladat: Bajnokok száma: {m.bajnokokSzáma}</p>
      <p>3. feladat: Francia bajnokok aránya: {m.franciákAránya}%</p>
      <p>4. feladat: {m.voltAzonosGyőztes}</p>
      <p>5. feladat: A következő évben/években nem rendezték meg a versenyt: {}</p>
    </div>
  );
}
