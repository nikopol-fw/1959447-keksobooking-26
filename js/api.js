// // отправка и получение данных getDat sendData - две функции
// // todo добавить обработку ошибки

const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Ошибка при загрузке.');
    });
};

// TODO body сделать 1-ым Nikolay
const sendData = (body, onSuccess, onFail) => {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Форма не отправлена. Попробуйте еще раз.');
      }
    })
    .catch(() => {
      onFail('Форма не отправлена. Попробуйте еще раз.');
    });
};


export {getData, sendData};
