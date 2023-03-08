let TOKEN = "";

vkBridge.send('VKWebAppInit');

vkBridge.send('VKWebAppGetAuthToken', {
  app_id:51572062,
  scope: ''
})
  .then((data) => {
    if (data["access_token"]) {
      TOKEN = data["access_token"];
      // console.log(JSON.stringify(data));
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
let id, first_name, last_name

vkBridge.send('VKWebAppGetUserInfo', {
})
  .then((data) => {
    if (data.id) {
      id= data.id;
      first_name=data["first_name"];
      last_name=data["last_name"];

    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
