const fetching = async (click, isShowAll) => {

   const data = await fetch(`https://openapi.programming-hero.com/api/phones?search=${click}`)

   const res = await data.json();

   const phone = res.data

   displayPhone(phone, isShowAll)
    
}



const displayPhone = (phones , isShowAll) => {
    
    const phoneSection = document.getElementById('phone-section');
    phoneSection.textContent = ''

    if (phones.length > 12 && !isShowAll) {

        
        document.getElementById('show-all').classList.remove('hidden')
        
    }else{
        document.getElementById('show-all').classList.add('hidden')
        
    }

    if (!isShowAll) {

        phones = phones.splice(0,12)
        
    }

    


    phones.forEach((phone) => {
        
        const div = document.createElement('div');

        div.innerHTML =` <div class="card  bg-base-100 p-5 shadow-xl">
        <figure class="px-10 bg-gray-300 pt-10">
          <img src="${phone.image}" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.phone_name}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`

      phoneSection.appendChild(div)

        
    });

    loadingSpin(false);

}

document.getElementById('input-field').addEventListener('keypress', (event) => {
    const fieldValue = document.getElementById('input-field').value;
    
    if(event.key === 'Enter'){
        loadingSpin(true)
        fetching(fieldValue);
     
    }
})

const clickGetValue = (isShowAll) => {
    loadingSpin(true)
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;
    fetching(inputValue, isShowAll);
    
}


const loadingSpin = (isLoading) => {
    const loadPin = document.getElementById('spin-load');

    if (isLoading) {

        loadPin.classList.remove('hidden');
        
    }else{
        loadPin.classList.add('hidden')
    }
}

const showAllProduct = () => {
    clickGetValue(true);
    
}