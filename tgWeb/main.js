const tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText("Отправить на бэк");
tg.MainButton.isVisible = true;
const el1 = document.getElementById('test1')
const el2 = document.getElementById('test2')

let obj = {
  item1: '',
  item2: '',
}

el1.addEventListener("input", function(){
  obj.item1 = el1.value
});

el2.addEventListener("input", function(){
  obj.item2 = el2.value
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(JSON.stringify(obj));
});
