import React, { useState } from 'react';
import { Jumbotron, Button, Badge } from 'react-bootstrap';

const steps = [
  {
    title: 'Проверка проблем с питанием',
    body: (
      <>
        <p>Нажмите кнопку питания на компьютере Mac (кнопка питания есть на каждом компьютере Mac), затем проверьте наличие признаков подачи питания, таких как:</p>

        <ul>
          <li>Звук, например шум работы вентилятора, жесткого диска или другой сигнал загрузки</li>
          <li>Свет, например от подсветки клавиатуры, клавиши Caps Lock или индикатора режима сна</li>
        </ul>

        <p>Если компьютер Mac не демонстрирует признаков включения, первым делом убедитесь, что он получает питание.</p>
      </>
    ),
  }, {
    title: 'Проверка исправности кабеля',
    body: (
      <>
        <p>Убедитесь, что кабель питания не поврежден и надежно подключен к компьютеру Mac и исправной розетке электросети. Если исправность розетки вызывает сомнения, проверьте ее с помощью лампы или другого устройства.</p>
        <p>В случае ноутбука Mac убедитесь, что используются подходящие кабель и адаптер питания. Оставьте их подключенными в течение времени, достаточного для зарядки аккумулятора до пригодного уровня.</p>
        <p>Узнайте, как устранять неполадки адаптеров питания USB-C или адаптеров питания MagSafe.</p>
      </>
    ),
  }, {
    title: 'Проверка внешнего дисплея',
    body: (
      <>
        <p>Если используется внешний дисплей, убедитесь, что он включен и с ним нет других проблем.</p>
        <p>Убедитесь, что на дисплее установлена ненулевая яркость. На встроенной клавиатуре ноутбуков Mac есть клавиша увеличения яркости .</p>
      </>
    ),
  }, {
    title: 'Перезагрузка или жесткий сброс',
    body: (
      <>
        <p>Затем, независимо от наличия признаков включения компьютера Mac, попробуйте следующие решения:</p>
        <ul>
          <li>Нажмите и удерживайте кнопку питания в течение 10 секунд, затем нажмите ее снова.</li>
          <li>Отключите от компьютера Mac все аксессуары, включая принтеры, диски, USB-концентраторы, а также мобильные устройства. (Проблема может быть связана с одним или несколькими из этих устройств или их кабелями.) Снова нажмите и удерживайте кнопку питания в течение 10 секунд, затем нажмите ее снова.</li>
          <li>Сбросьте параметры контроллера управления системой (SMC).</li>
        </ul>
      </>
    ),
  }, {
    title: 'Проверка других проблем с запуском',
    body: (
      <>
        <ul>
          <li>Если компьютер Mac включается, но не завершает запуск, возможные действия зависят от выводимого экрана.</li>
          <li>Если в компьютер Mac недавно были добавлены модули памяти или жесткий диск (твердотельный накопитель), убедитесь, что эти компоненты совместимы и установлены правильно. По возможности извлеките их и протестируйте компьютер с исходными модулями памяти или диском.</li>
        </ul>
      </>
    ),
  }, {
    title: 'Если компьютер Mac по-прежнему не включается или не запускается',
    body: (
      <>
        <p>Если вам по-прежнему нужна помощь, обратитесь в службу поддержки Apple, магазин Apple Store или авторизованный сервисный центр Apple.</p>
      </>
    ),
  },
];

const Fixes = () => {
  const [step, changeStep] = useState(0);
  const [inProccess, toggleProccess] = useState(true);
  const targetStep = steps[step];

  return (
    <div>
      <h1>Если компьютер Mac не включается или не запускается</h1>
      <p>Если компьютер Mac не включается или включается, но не завершает запуск, попробуйте следующие решения.</p>
      {inProccess ? (
        <Jumbotron>
          <h1>{step < steps.length - 1 && <Badge variant="secondary">Шаг {step + 1}</Badge>} {targetStep.title}</h1>
          {targetStep.body}
          {step < steps.length - 1 ? (
            <p>
              <Button variant="success" className="mr-2" onClick={() => toggleProccess(false)}>Это помогло</Button>
              <Button variant="primary" onClick={() => changeStep(step + 1)}>Следующий шаг</Button>
            </p>
          ) : (
            <p>
              <Button variant="primary" onClick={() => changeStep(0)}>Вернуться в начало</Button>
            </p>
          )}
        </Jumbotron>
      ) : (
        <Jumbotron>
          <h1>Поздравляем!</h1>
          <p>Мы очень рады, что смогли вам помочь! :)</p>
        </Jumbotron>
      )}
    </div>
  );
};

export default Fixes;
