"use strict";

document.querySelector("button").addEventListener("click", () => {
  // const li = document.createElement("li");
  const colors = document.querySelectorAll("input");
  const selectedColors = [];
  colors.forEach((color) => {
    if (color.checked === true) {
      selectedColors.push(color.value);
    }
  });
  const li = document.createElement("li");
  li.textContent = selectedColors.join("と");
  document.querySelector("ul").appendChild(li);
  // li.textContent = check.value;
  // document.querySelector("ul").appendChild(li);
  // const li = document.createElement("li");
  // const color = document.querySelector("select");
  // li.textContent = `${color.value} - ${color.selectedIndex}`;
  // document.querySelector("ul").appendChild(li);

  // 1.li要素を生成したい
  // 2.inputタグから値を取得したい
  // 3.ulタグにli要素を追加したい
  // const li = document.createElement("li");
  // const text = document.querySelector("input");
  // li.textContent = text.value;
  // document.querySelector("ul").appendChild(li);
  // text.value = "";
  // text.focus();
  // const li = document.createElement("li");
  // const text = document.querySelector("input");
  // li.textContent = text.value;
  // document.querySelector("ul").appendChild(li);
  // text.value = "";
  // text.focus();
  //   const item1 = document.querySelectorAll("li")[1];
  //   //   item1.remove();
  //   document.querySelector("ul").removeChild(item1);
  //   const item0 = document.querySelectorAll("li")[0];
  //   const copy = item0.cloneNode(true);
  //   const ul = document.querySelector("ul");
  //   const item2 = document.querySelectorAll("li")[2];
  //   ul.insertBefore(copy, item2);
  //   const item2 = document.createElement("li");
  //   item2.textContent = "item 2";
  //   const ul = document.querySelector("ul");
  //   ul.appendChild(item2);
  //   const targetNode = document.getElementById("target");
  //   targetNode.textContent = targetNode.dataset.translation;
  //   targetNode.className = "my-color my-border";
  //   if (targetNode.classList.contains("my-color") === true) {
  //     targetNode.classList.remove("my-color");
  //   } else {
  //     targetNode.classList.add("my-color");
  //   }
  //   targetNode.classList.toggle("my-color");
});
