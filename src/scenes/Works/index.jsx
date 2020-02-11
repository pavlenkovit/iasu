import React from 'react';

const Works = () => {
  return (
    <div>
      <h1>Регламентные работы для MacBook</h1>
      <p>Прежде чем чистить внешнюю поверхность компьютера MacBook, MacBook Pro или MacBook Air, выключите его и отсоедините от него адаптер питания. Для чистки поверхности компьютера используйте мягкую увлажненную ткань без ворса. Не допускайте попадания влаги в отверстия компьютера. Не распыляйте жидкость непосредственно на компьютер. Не применяйте аэрозольные распылители, растворители, абразивные материалы и чистящие средства, содержащие перекись водорода. Они могут повредить поверхность.</p>

      <p>Прежде чем чистить экран компьютера MacBook, MacBook Pro или MacBook Air, выключите его и отсоедините от него адаптер питания. Увлажните мягкую ткань без ворса и почистите ею экран компьютера. Для увлажнения следует использовать только воду.</p>

      <p>MacBook Pro 2016 г. и более поздних моделей с Touch Bar и Touch ID: очистите Touch Bar и Touch ID (кнопку питания) так же, как и дисплей. Завершите работу компьютера Mac и отключите адаптер питания. Увлажните мягкую ткань без ворса и почистите ею Touch Bar и Touch ID. Для увлажнения следует использовать только воду.</p>

      <h2>Чистка клавиатуры</h2>
      <table className="table table-responsive table-bordered">
        <tbody>
        <tr>
          <th>1</th>
          <td>Держите ноутбук Mac под углом 75 градусов, не строго вертикально.</td>
          <td>
            <img style={{ maxWidth: 300 }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbook/macbook-cleaning-keyboard-front-75angle.jpg" alt="" />
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Продуйте сжатым воздухом всю клавиатуру или только проблемные клавиши слева направо.</td>
          <td>
            <img style={{ maxWidth: 300 }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbook/macbook-cleaning-keyboard-front-clean-right.jpg" alt="" />
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Поставьте ноутбук Mac на правый край и продуйте клавиатуру еще раз, слева направо.</td>
          <td>
            <img style={{ maxWidth: 300 }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbook/macbook-cleaning-keyboard-left-side.jpg" alt="" />
          </td>
        </tr>
        <tr>
          <th>4</th>
          <td>Поставьте ноутбук MacBook на левый край и повторите продувку.</td>
          <td>
            <img style={{ maxWidth: 300 }} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbook/macbook-cleaning-keyboard-right-side.jpg" alt="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Works;
