const txtElement = ['ilmu yang mempelajari terkait penggunaan komputer untuk mengatur dan menganalisis data yang berukuran besar, baik data maupun informasi pada mesin berbasis komputasi.'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ketik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.ketik').textContent = words;

    if(words.length == currentTxt.length){
      count++;
      txtIndex = 0;  
    }

    setTimeout(ketik, 400);


})();