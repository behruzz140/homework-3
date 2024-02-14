let cardWrapper = document.querySelector('.section-2_wrapper');

// RENDER DATA STARTED

function renderdata(data) {

  data.cards.forEach((el) => {
    const { img, name, price } = el;

    const card = document.createElement('div');
    card.classList.add('section-2_wrapper-card');
    card.innerHTML = `
        
                <img src="${img}" alt="${name}" class="py-[10px] px-[60px] bg-[#F5F5F5] h-[146px]">

                    <div class="title bg-[#fff] p-[15px] border-t-[1px] border-t-[#00000014]">
                            <h3 class="text-[16px]">${name}</h3>

                        <p class="flex py-[5px] items-center gap-2 pb-[10px] border-b-[1px] text-[16px] border-b-[#00000017]">
                            <b>${price}</b>
                            <a href="#" class="line-through">${price}</a>
                        </p>

                        <h2 class="text-[16px] text-[#249B3E] font-bold pt-[1px]">${price}</h2>
                    </div>
            `;

    cardWrapper.appendChild(card);
  });
}

renderdata(card);

// RENDER DATA ENDED


let cardWrapper2 = document.querySelector('.section-3_wrapper');

function renderData2(data) {
  data.types.forEach((el) => {
    const { type, img } = el;


    const card = document.createElement('div');
    card.classList.add('section-3_wrapper-card');

    card.innerHTML = `
      
                      <div class="flex flex-col gap-[20px] text-center">
                        <div class="card-2 h-[105px]">
                            <img src="${img}" alt="${type}">
                        </div>
                        <p class="text-[16px] font-[500]">${type}</p>
                    </div>
      
      
      
      
      
      `
    cardWrapper2.appendChild(card);

  })
}

renderData2(type)

