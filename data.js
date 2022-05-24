fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data); 
    return data.json();
}).then((completedata) => {
    // console.log(completedata[0].employee_name);

    let data1="";
    completedata.map((values) => {
        data1+=`
        
          <div class="card h-100" style="border: black;">
            <img src="/home/divine/Pictures/9f44e7a6b729192d6b81e7e286a58b1a65c5aa5f780d01d4a86444d0dd9880bc.png" class="card-img-top" alt="...">
            <div class="card-body bg-dark" style="color: #e1512b;">
              <h5 class="card-title ">${values.title}</h5>
              <p class="card-text">${values.price}</p>
              <p class="card-text">${values.description}</p>
            </div>
          </div>`;

    });
    
    document.getElementById("mycards").innerHTML=data1;

}).catch((error) => console.error("FETCH ERROR:", error));