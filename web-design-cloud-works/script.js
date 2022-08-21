    var allList = [];
    fetch('/depart/eh/centers/ceg/community-engagement-core(draft)/articles-cec/').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
    
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
    
        // Get the data
        allList = doc.querySelectorAll('.container-blog .box-container .box');
        console.log(allList);

    
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });


//fetch data ends here
//
//
//
//
//


    const searchValue = document.querySelector('#readfromhere');
 //for use on the page where the data is located
   //   const allList = document.querySelectorAll('.container-blog .box-container .box');
   const putHere = document.querySelector('#getcontents');

searchValue.addEventListener('keyup',(e) =>{
    const searchString = e.target.value.toLowerCase();
    filteredList = [...allList].filter((data) => {
        var getValue = data.querySelector('h3').innerHTML;
        return (
            getValue.toLowerCase().includes(searchString)
        )
    });
    if (e.target.value === ''){
        putHere.innerHTML='';
    }else{
    displayResults(filteredList);
    }
});

const displayResults = (data) => {
    var htmlString = data.map((one) => {
        return `
        <li>
  
                <a href=#>
                    <div class="image">
                        <img src="${one.querySelector('img').getAttribute('src')}">
                    </div>
                    <div class="content">
                        <h2>${one.querySelector('h3').innerHTML}</h2>
                        <p>${one.querySelector('.icons span').innerHTML}</p>
                    </div>
                </a>

        </li>
        `;
    }).join('');
    if(htmlString.length == 0){
        htmlString = 
            `
            <li>
                <p style="color:grey; text-align: center;">
                    Nothing to display here
                </p>
            </li>
            `;
        
    }
    putHere.innerHTML = htmlString
    

};

