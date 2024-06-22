import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Loja", "Mac", "iPhone", "Suporte"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "O chip A17 Pro entra em cena.",
        "E nada será como antes.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium. Muito robusto Muito leve. Tão Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max.",
        "De longe, o maior zoom óptic.",
        "em um iPhone",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["Novo botão de Ação.", "O que você quer que ele faça?"],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro em Titanium natural",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro em Titanium Azul",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro em Titanium Branco",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro em Titanium Preto",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Política de Privacidade",
    "Termos de Uso",
    "Política de Vendas",
    "Legal",
    "Mapa do Site",
  ];