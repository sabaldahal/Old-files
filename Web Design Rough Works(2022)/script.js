    const searchValue = document.querySelector('#readfromhere');
    const allList = document.querySelectorAll('.container-blog .box-container .box');
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
            <div class="result">
                <a href=#>
                    <div class="image">
                        <img src="${one.querySelector('img').getAttribute('src')}">
                    </div>
                    <div class="content">
                        <h2>${one.querySelector('h3').innerHTML}</h2>
                        <p>${one.querySelector('.icons span').innerHTML}</p>
                    </div>
                </a>
            </div>
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
