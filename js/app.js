const fetching = async (click) => {

   const data = await fetch(`https://openapi.programming-hero.com/api/phones?search=${click}`)

   const res = await data.json();

   const phone = res.data


   displayPhone(phone)
    
}



const displayPhone = (phones) => {
    
    const phoneSection = document.getElementById('phone-section');
    phoneSection.textContent = ''
    phones.forEach(phone => {
        
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

      

        console.log(phone);
        
    });

}


const clickGetValue = () => {
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;
    fetching(inputValue);
}