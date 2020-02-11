import React from 'react';

const Structure = () => {
  return (
    <div>
      <h1>Структура MacBook</h1>
      <p>Позиционируется в линейке Apple как ноутбук для профессиональной деятельности (по общей классификации является современным мейнстримным бизнес-ноутбуком с выраженными мультимедийными чертами; не имеет армированных\защищённых версий и до 2016 года не комплектовался высокоуровневой профессиональной графикой и модулями NFC).</p>

      <h2>Характеристики</h2>
      <table className="table table-bordered table-responsive">
        <thead>
        <tr>
          <th></th>
          <th>
            <p>MacBook Pro 13 дюймов</p>
            <p>
              <img style={{ maxWidth: 280 }} src="https://apple.com/v/macbook-pro/y/images/overview/find_the_right_mbp_13__e8rbl6qpi96y_large_2x.jpg" alt="" />
            </p>
          </th>
          <th>
            <p>MacBook Pro 16 дюймов</p>
            <p>
              <img style={{ maxWidth: 300 }} src="https://www.apple.com/v/macbook-pro/y/images/overview/find_the_right_mbp_16__dgg32ajoxemq_large_2x.jpg" alt="" />
            </p>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Дисплей Retina</td>
          <td>
            13,3 дюйма</td>
          <td>16 дюймов</td>
        </tr>
        <tr>
          <td>Процессор</td>
          <td>Intel Core i7 до 4 ядер</td>
          <td>
            Intel Core i9 до 8 ядер</td>
        </tr>
        <tr>
          <td>Память</td>
          <td>
            До 16 ГБ</td>
          <td>
            До 64 ГБ</td>
        </tr>
        <tr>
          <td>Накопитель</td>
          <td>До 2 ТБ</td>
          <td>До 8 ТБ</td>
        </tr>
        <tr>
          <td>Графический процессор</td>
          <td>Intel Iris Plus Graphics 655 (в максимальной конфигурации компьютера)</td>
          <td>AMD Radeon Pro 5500M с 8 ГБ памяти GDDR6 (в максимальной конфигурации компьютера)</td>
        </tr>
        <tr>
          <td>Работа без подзарядки</td>
          <td>
            До 10 часов</td>
          <td>
            До 11 часов</td>
        </tr>
        <tr>
          <td>Клавиатура и трекпад</td>
          <td>Клавиатура с подсветкой, Touch Bar, Touch ID и трекпад Force Touch</td>
          <td>Клавиатура Magic Keyboard с подсветкой, Touch Bar, Touch ID и трекпад Force Touch</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Structure;
