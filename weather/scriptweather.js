const weather = {
  monday: 6,
  tuesday: 6,
  wednesday: 7,
  thursday: 7,
  friday: 8,
  saturday: 9,
  sunday: 13,
  averageTemperature: () => {
    let count = 0;
    Object.values(weather).forEach((element) => {
      if (typeof element == "number") {
        count += element;
      }
    });
    count /= 7;
    console.log(`Середня температура ${count.toFixed(2)}°C`);
    return count.toFixed(2);
  },
  minTemperature: () => {
    let count = 100;
    Object.values(weather).forEach((element) => {
      if (typeof element == "number" && element < count) {
        count = element;
      }
    });
    return console.log(`Мінімальна температура ${count}°C`);
  },
  maxTemperature: () => {
    let count = 0;
    Object.values(weather).forEach((element) => {
      if (typeof element == "number" && element > count) {
        count = element;
      }
    });
    return console.log(`Максимальна температура ${count}°C`);
  },

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        let text = Object.keys(weather);
        let final = "(";
        for (let i = 0; i < 7; i++) {
          final = final + text[i].slice(0, 2) + "-";
        }
        final = final.slice(0, -1) + ")";
        console.log(final);
        return final;
        break;
      case "number":
        return weather.averageTemperature();
        break;
      default:
        return "anything";
    }
  },
};

weather.minTemperature();
weather.maxTemperature();
weather.averageTemperature();
String(weather);
Number(weather);
