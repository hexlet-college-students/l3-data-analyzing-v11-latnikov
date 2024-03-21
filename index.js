const showInfo = (str) => {
  const lines = str.trim().split('\n').slice(1); // сделали массив со строками

  const data = lines.map((line) => line.split(','));
  // сделали из массива со строками массив с массивами

  // 1-ый шаг
  console.log(`Count: ${lines.length}`);

  // 2-ой шаг
  const continents = [...new Set(data.map((row) => row[2]))].join(', '); // сделали множество и соединили его в строку. множество - коллекция, где значения не могут повторяться

  console.log(`Continents: ${continents}`);

  // 3ий шаг количество языков из одной страны
  const monolanguages = data.filter((row) => Number(row[4]) === 1).length;
  console.log(`Amount of languages with 1 country: ${monolanguages}`);

  const mostPopular = data.map( // на основе коллекции создаём объект с двумя полями
    (row) => (
      { lang: row[0], speakers: Number(row[1]) }
    ),
  );

  const mostLanguage = mostPopular.reduce( // идем по объекту и находим самый популярный
    // eslint-disable-next-line
    (max, language) => language.speakers 
    > max.speakers ? language : max,
  ).lang;
  console.log(`The most popular language: ${mostLanguage}`);

  const complexityCounts = data.reduce((acc, row) => {
    const complexity = row[3];
    acc[complexity] = (acc[complexity] || 0) + 1;
    return acc;
  }, {});
  const complexityOutput = Object.entries(complexityCounts)
    .map(([key, value]) => `${key}: ${value}`).join(', ');
  console.log(`Complexity: ${complexityOutput}`);
};

export default showInfo;
