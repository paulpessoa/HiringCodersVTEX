// função copiada da biblioteca Slick Carousel
$(document).ready(function () {
  $(".carousel-produtos").slick({
    infinite: true,
    autoplay: true,
    cssEase: "ease",
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//função para  atualizado o ano de Copyright
const d = new Date();
document.getElementById("c-year").innerHTML = d.getFullYear();

//função para armazenar os dados no localStorage
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const subscription = document.getElementById("subscription").value;
  let data = {
    nome,
    email,
    whatsapp,
    subscription,
  };
  console.log(email);
  const dataConverted = JSON.stringify(data);
  localStorage.setItem("dados", dataConverted);
});
localStorage.clear();

//exibir pop "confirmação"
const myForm = document.getElementById("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  $("#BlockUIConfirm").fadeIn();
});

//fechar pop "confirmação"
function Submit() {
  $("#BlockUIConfirm").fadeOut();
}
