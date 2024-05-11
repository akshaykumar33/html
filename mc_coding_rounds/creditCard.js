import { countryData } from "./data.js";

function createCard() {
    let form=document.createElement('form');
    let credit = document.getElementById('credit');
     
        // Corresponding label for Credit Card Number
        let labelNum = document.createElement('label');
        labelNum.textContent = 'Credit Card Number:';
        labelNum.setAttribute('for', 'ccNum');
        credit.appendChild(labelNum);

    // Credit Card Number
    let inputNum = document.createElement('input');
    inputNum.type = 'text';
    inputNum.placeholder = 'Credit Card Number';
    inputNum.maxLength = 16;
    inputNum.required=true;
    inputNum.id = 'ccNum';
    inputNum.name='ccNum';
    credit.appendChild(inputNum);

    // CVV

        // Corresponding label for CVV
        let labelCvv = document.createElement('label');
        labelCvv.textContent = 'CVV:';
        labelCvv.setAttribute('for', 'cvv');
        credit.appendChild(labelCvv);

    let cvv = document.createElement('input');
    cvv.type = 'password';
    cvv.placeholder = 'CVV';
    cvv.maxLength = 3;
    cvv.required=true;
    cvv.id = 'cvv';
    cvv.name='cvv';
    credit.appendChild(cvv);



    // Expiry Date
            // Corresponding labels for Expiry Date
            let labelExp = document.createElement('label');
            labelExp.textContent = 'Expiry Date:';
            credit.appendChild(labelExp);

    let mmyy = document.createElement('div');
    mmyy.classList.add('mmdd');


        let labelMM = document.createElement('label');
        labelMM.textContent = 'MM:';
        labelMM.setAttribute('for', 'mm');
        mmyy.appendChild(labelMM);
        
    let mm = document.createElement('input');
    mm.type = 'text';
    mm.placeholder = 'MM';
    mm.maxLength = 2;
    mm.required=true;
    mm.id = 'mm';
    mm.name='mm'
    mmyy.appendChild(mm);

    let labelYY = document.createElement('label');
    labelYY.textContent = 'YYYY:';
    labelYY.setAttribute('for', 'yy');
    mmyy.appendChild(labelYY);

    let yy = document.createElement('input');
    yy.type = 'text';
    yy.placeholder = 'YYYY';
    yy.maxLength = 4;
    yy.required=true;
    yy.id = 'yy';
    yy.name='yy';
    mmyy.appendChild(yy);

    credit.appendChild(mmyy);




       // Corresponding label for Address
       let labelAddress = document.createElement('label');
       labelAddress.textContent = 'Billing Address:';
       labelAddress.setAttribute('for', 'address');
       credit.appendChild(labelAddress);

    // Address
    let address = document.createElement('textarea');
    address.placeholder = 'Billing Address';
    address.maxLength = 200;
    address.required=true;
    address.name='address';
    address.id='address';
    credit.appendChild(address);
    
 
    

    // Phone Number and Country Code
    let parentForPhnoAndCC = document.createElement('div');
  
        // Corresponding label for Phone Number
        let labelPhno = document.createElement('label');
        labelPhno.textContent = 'Phone Number:';
        labelPhno.setAttribute('for', 'phno');
        parentForPhnoAndCC.appendChild(labelPhno);


    // Country Code Select
    let countryCode = document.createElement('select');
    countryCode.id='code'
    countryCode.name='code';
    let option = document.createElement('option');
    option.value = "Select Country Code";
    option.textContent = "Select Country Code";
    countryCode.appendChild(option);

    // Add more country codes as needed
    let countryCodes = countryData;
    countryCodes.forEach(code => {
        let countryCodeOption = document.createElement('option');
        countryCodeOption.value = code.code;
        countryCodeOption.textContent = code.code;
        countryCode.appendChild(countryCodeOption);
    });
    parentForPhnoAndCC.appendChild(countryCode);

    // Phone Number Input
    let phno = document.createElement('input');
    phno.type = 'text';
    phno.placeholder = 'Phone Number';
    phno.maxLength = 10;
    phno.required=true;
    phno.id = 'phno';
    phno.name='phno';
    parentForPhnoAndCC.appendChild(phno);

    credit.appendChild(parentForPhnoAndCC);

  //submit

  let submit=document.createElement('button');
  submit.type='submit';
  submit.textContent="Submit";
  credit.appendChild(submit);

  form.appendChild(credit);
  document.body.appendChild(form);
    // Validation for CVV (3 digits), Phone Number, and Address
    inputNum.addEventListener('input', function() {
        if (!/^\d{16}$/.test(inputNum.value)) {
            cvv.setCustomValidity('Credit card number must be 16 digits');
        } else {
            cvv.setCustomValidity('');
        }
    });

    cvv.addEventListener('input', function() {
        if (!/^\d{3}$/.test(cvv.value)) {
            cvv.setCustomValidity('CVV must be 3 digits');
        } else {
            cvv.setCustomValidity('');
        }
    });

    phno.addEventListener('input', function() {
        if (!/^\d{10}$/.test(phno.value)) {
            phno.setCustomValidity('Invalid phone number');
        } else {
            phno.setCustomValidity('');
        }
    });

    address.addEventListener('input', function() {
        if (address.value.length > 200) {
            address.setCustomValidity('Address must be less than 200 characters');
        } else {
            address.setCustomValidity('');
        }
    });

    yy.addEventListener('input', function() {
        let enteredYear = parseInt(yy.value);
        let currentYear = new Date().getFullYear();
        let futureYearsRange = 20;
    
        if (!/^\d{4}$/.test(yy.value)) {
            yy.setCustomValidity('Invalid year');
        } else if (enteredYear <= currentYear) {
            yy.setCustomValidity('Please enter a future year');
        } else if (enteredYear > currentYear + futureYearsRange) {
            yy.setCustomValidity('Year must be within the next ' + futureYearsRange + ' years');
        } else {
            yy.setCustomValidity('');
        }
    });
    
    function storeFormData() {
        let formData = {}; // Object to store form data
    
        // Loop through all form elements
        document.querySelectorAll('form input, form select, form textarea').forEach(input => {
            let name = input.name;
            let value = input.value;
    
            // If the input has a name attribute, store its value in the formData object
            if (name) {
                formData[name] = value;
            }
        });
    
        // Do something with the formData object, such as sending it to a server or saving it locally
        console.log(formData);
    }
    
    // Example usage: call the function when submitting the form
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        storeFormData(); // Call the function to store form data
    });
    
}

createCard();
