'use strict';
import axios from 'axios';
let counter = 1;
const button = document.getElementById('submit-btn');
button.addEventListener('click', function() {
       counter++;
  })

const button_two = document.getElementById('button-two');
button_two.addEventListener('click', function() {
          const list = document.getElementById('data-displays');
          list.removeChild(list.lastChild);
    })


function displayData() {

        const elem0 = document.createElement('h3');
        const elem1 = document.createElement('div');
        const elem2 = document.createElement('div');
        const elem3 = document.createElement('div');
        const elem4 = document.createElement('div');
        const elem5 = document.createElement('div');
        const elem6 = document.createElement('div');

        elem0.innerHTML = '<br>' + 'Product number ' + ' ' + counter;
        elem1.innerHTML = '<br>' + 'Name:' + '  ' + document.getElementById('input1').value + '<br>';
        elem2.innerHTML = '<br>' + 'Price :' + '  ' + document.getElementById('input2').value + '<br>';
        elem3.innerHTML = '<br>' + 'Employee :' + '  ' + document.getElementById('input3').value + '<br>';
        elem4.innerHTML = '<br>' + 'Category :' + '  ' + document.getElementById('input4').value + '<br>';
        elem5.innerHTML = '<br>' + 'Description :' + '  ' + document.getElementById('textarea1').value + '<br>';
        elem6.innerHTML = '<br>' + 'Review :' + '  ' + document.getElementById('textarea2').value + '<br>' + '<br>';

        document.getElementById('data-displays').appendChild(elem0);
        document.getElementById('data-displays').appendChild(elem1);
        document.getElementById('data-displays').appendChild(elem2);
        document.getElementById('data-displays').appendChild(elem3);
        document.getElementById('data-displays').appendChild(elem4);
        document.getElementById('data-displays').appendChild(elem5);
        document.getElementById('data-displays').appendChild(elem6);

        elem0.style.backgroundColor = "#0FDDAF";
        elem1.style.backgroundColor = "#0FDDAF";
        elem2.style.backgroundColor = "#0FDDAF";
        elem3.style.backgroundColor = "#0FDDAF";
        elem4.style.backgroundColor = "#0FDDAF";
        elem5.style.backgroundColor = "#0FDDAF";
        elem6.style.backgroundColor = "#0FDDAF";

        elem0.style.opacity = "0.8";
        elem1.style.opacity = "0.8";
        elem2.style.opacity = "0.8";
        elem3.style.opacity = "0.8";
        elem4.style.opacity = "0.8";
        elem5.style.opacity = "0.8";
        elem6.style.opacity = "0.8";

        elem0.style.marginBottom = "0";

  }
  document.getElementById("submit-btn").addEventListener('click',function ()
      {
       displayData()

       axios({
        method: 'post',
        url: 'http://localhost:4000/products',
        headers: {'Content-Type': 'application/json'},
        data: {
          'title': document.getElementById('input1').value,
          'price': document.getElementById('input2').value,
          'employee': document.getElementById('input3').value,
          'category': document.getElementById('input4').value,
          'description': document.getElementById('textarea1').value,
          'review': document.getElementById('textarea2').value
          }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (e) {
            console.log(e)
      })
       //validation code to see State field is mandatory.
      }  );
