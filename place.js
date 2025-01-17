//1
const button = document.querySelector(".confirm")
button.textContent = "Відхілити"
const input = document.querySelector(".check");
input.setAttribute("type", "time");

//2
const foodPic = document.querySelector(".picture")
foodPic.setAttribute(
    "src",
    "https://www.southernliving.com/thmb/AbLM569rdx7KDFxUYUApHYv7KqY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Air_Fryer_Grilled_Cheese_014-bfa86395da174201957756fc58cc0467.jpg"
  );

  //3
  const url = document.querySelector(".link")
  url.setAttribute(
    "href",
    "https://ostik1220.github.io/hw_js_17/"
  )
  url.setAttribute(
    "alt",
    "hw_js_17"
  )

  //4
  const list = document.querySelector(".list")
  const firstItem = list.querySelector("li:nth-child(1)")
  const firstText = firstItem.querySelector("p:first-child")
  firstText.textContent = "first child of first li, number one"