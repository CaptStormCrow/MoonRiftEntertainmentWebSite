// ===================== MERCH TEMPLATE =====================

// data for merchandise items, modify as needed
const merchData = [
  {
    title: "Cap",
    image:
      "https://media.paulsmith.com/media/catalog/product/cache/8326070a1acafbcbf1de21ba1a4ecdc0/a/u/auxd-987c-zebra-79-detaila_1.jpg",
  },
  {
    title: "T-shirt",
    image:
      "https://cdn.shopify.com/s/files/1/1137/5270/products/be-kt-032-ovo-essentials-tshirt-black-2_2048x2048.jpg?v=1606863407",
  },
  {
    title: "Long sleeved shirt",
    image:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc4%2F51%2Fc451d0afb8838acd2621d0f2aaea5063ecd98f37.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    title: "Hoodie",
    image:
      "https://cdn.shopify.com/s/files/1/0186/1574/products/KN67300300-BK01.jpg?v=1571263342",
  },
];

function addMerch(templateId) {
  const merchList = document.getElementById("merchs");
  const fragment = document.getElementById(templateId);

  // Clear out content
  merchList.innerHTML = "";

  // Loop over data and modify the given template
  merchData.forEach((merch) => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);

    // Add relevant content to the template
    instance.querySelector(".merch-img").src = merch.image;
    instance.querySelector(".merch-title").innerHTML = merch.title;

    // Append the instance ot the DOM
    merchList.appendChild(instance);
  });
}

addMerch("merch-template");
