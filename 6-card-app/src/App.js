import React from "react";
import "./styles.css";
import Card from "./Card";

const data = [
  {
    id: 1,
    character: "AAng",
    image: "https://upload.wikimedia.org/wikipedia/tr/7/77/Aang_karakteri.png",
    hakkında:
      "Avatar Aang, Avatar serisinin baş karakteridir. Hava Bükücü bir çocuk olan Aang, 100 yıl boyunca donmuş halde kaldıktan sonra, kendisini dünyayı ele geçirmeye çalışan Ateş Ulusuna karşı savaşırken bulur. Aang, Avatar olmasının yanı sıra Hava Bükücü bir rahiptir."
  },
  {
    id: 2,
    character: "Katara",
    image:
      "https://upload.wikimedia.org/wikipedia/tr/5/5d/Katara_karakteri.png",
    hakkında:
      "Katara, Avatar serisinin baş karakterlerinden biridir. Su Bükücü bir kız olan Katara, Aang ile birlikte dünyayı ele geçirmeye çalışan Ateş Ulusuna karşı savaşır. Katara, Aang'in su bükme öğretmenidir."
  },
  {
    id: 3,
    character: "Sokka",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Sokka.png",
    hakkında:
      "Sokka, Avatar serisinin baş karakterlerinden biridir. Su Kabilesi'nin kabile şefinin oğlu olan Sokka, Aang ile birlikte dünyayı ele geçirmeye çalışan Ateş Ulusuna karşı savaşır. Sokka, Aang'in en yakın arkadaşıdır."
  },
  {
    id: 4,
    character: "Toph",
    image:
      "https://cdn.kayiprihtim.com/wp-content/uploads/2020/07/Avatar-The-Last-Airbender-Toph-Beifong%E2%80%99s-Metalbending-Academy.jpg",
    hakkında:
      "Toph Beifong, Avatar serisinin baş karakterlerinden biridir. Dünyanın en güçlü toprak bükücüsü olan Toph, Aang ile birlikte dünyayı ele geçirmeye çalışan Ateş Ulusuna karşı savaşır. Toph, Aang'in toprak bükme öğretmenidir."
  },
  {
    id: 5,
    character: "Zuko",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg",
    hakkında:
      "Zuko, Avatar serisinin baş karakterlerinden biridir. Ateş Ulusu'nun prensi olan Zuko, Aang ile birlikte dünyayı ele geçirmeye çalışan Ateş Ulusuna karşı savaşır. Zuko, Aang'in ateş bükme öğretmenidir."
  },
  {
    id: 6,
    character: "Azula",
    image:
      "https://miro.medium.com/v2/resize:fit:1000/1*FRmFttjydO0adWJCNN_W-A.png",
    hakkında:
      "Azula, Avatar serisinin baş karakterlerinden biridir. Ateş Ulusu'nun prensesi olan Azula, Aang ile birlikte dünyayı ele geçirmeye çalışan Ateş Ulusuna karşı savaşır. Azula, Zuko'nun kız kardeşidir."
  }
];

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
