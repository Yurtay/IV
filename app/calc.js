export function runingCalc () {
    const bodyPage = document.querySelector('.body_page')
    bodyPage.innerHTML = ''

    const divMain = document.createElement('div'),
          div = document.createElement('div'),
          button = document.createElement('button'),
          input = document.createElement('input'),
          div2 = document.createElement('div'),
          span = document.createElement('span'),
          spanNameCalc = document.createElement('span'),
          divSpanNameCalc = document.createElement('div'),
          divCalc = document.createElement('div')

          spanNameCalc.textContent = 'My first calculator (version 1.0)'
          divMain.className = 'divMAinCalc'
          divCalc.className = 'divCalc'
          divSpanNameCalc.className = 'name-calc'
          button.textContent = 'get result'
          button.className = 'get_result'
          input.value = ''
          input.placeholder = 'enter a number.....'
          input.className = 'calc_input'
          span.textContent = '-------------'
          div2.append(span)
          div.append(input, button)
          divSpanNameCalc.append(spanNameCalc) 


    const div3 = document.createElement('div'),
          button1 = document.createElement('button'),
          button2 = document.createElement('button'),
          button3 = document.createElement('button'),
          button4 = document.createElement('button')

          button1.textContent = '+'
          button1.className = 'buttonClick buttonCalc'
          button2.textContent = '-'
          button2.className = 'buttonClick2 buttonCalc'
          button3.textContent = '*'
          button3.className = 'buttonClick3 buttonCalc'
          button4.textContent = '/'
          button4.className = 'buttonClick4 buttonCalc'
          div3.append(button1, button2, button3, button4)
          

          const divNumb123 = document.createElement('div'),
                divNumb456 = document.createElement('div'),
                divNumb789 = document.createElement('div'),
                divNumb0 = document.createElement('div'),
                buttonNumb1 = document.createElement('button'),
                buttonNumb2 = document.createElement('button'),
                buttonNumb3 = document.createElement('button'),
                buttonNumb4 = document.createElement('button'),
                buttonNumb5 = document.createElement('button'),
                buttonNumb6 = document.createElement('button'),
                buttonNumb7 = document.createElement('button'),
                buttonNumb8 = document.createElement('button'),
                buttonNumb9 = document.createElement('button'),
                buttonNumb0 = document.createElement('button'),
                buttonClean = document.createElement('button')

                buttonNumb1.textContent = '1'
                buttonNumb1.className = 'buttonClickNumb1 buttonCalc'
                buttonNumb2.textContent = '2'
                buttonNumb2.className = 'buttonClickNumb2 buttonCalc'
                buttonNumb3.textContent = '3'
                buttonNumb3.className = 'buttonClickNumb3 buttonCalc'
                buttonNumb4.textContent = '4'
                buttonNumb4.className = 'buttonClickNumb4 buttonCalc'
                buttonNumb5.textContent = '5'
                buttonNumb5.className = 'buttonClickNumb5 buttonCalc'
                buttonNumb6.textContent = '6'
                buttonNumb6.className = 'buttonClickNumb6 buttonCalc'
                buttonNumb7.textContent = '7'
                buttonNumb7.className = 'buttonClickNumb7 buttonCalc'
                buttonNumb8.textContent = '8'
                buttonNumb8.className = 'buttonClickNumb8 buttonCalc'
                buttonNumb9.textContent = '9'
                buttonNumb9.className = 'buttonClickNumb9 buttonCalc'
                buttonNumb0.textContent = '0'
                buttonNumb0.className = 'buttonClickNumb0 buttonCalc'
                buttonClean.textContent = 'Clean'
                buttonClean.className = 'buttonClickClean buttonCalc'

                divNumb123.append(buttonNumb1, buttonNumb2, buttonNumb3)
                divNumb456.append(buttonNumb4, buttonNumb5, buttonNumb6)
                divNumb789.append(buttonNumb7, buttonNumb8, buttonNumb9)
                divNumb0.append(buttonNumb0, buttonClean)

                divCalc.append(divSpanNameCalc, div, div2, div3, divNumb123, divNumb456, divNumb789, divNumb0)
                divMain.append(divCalc)
                bodyPage.append(divMain)

    function addButton1 () {
        console.log('Hellow')
        inputValue.value += `${button1.textContent}`
    }
    function addButton2 () {
        console.log('Hellow')
        inputValue.value += `${button2.textContent}`
    }
    function addButton3 () {
        console.log('Hellow')
        inputValue.value += `${button3.textContent}`
    }
    function addButton4 () {
        console.log('Hellow')
        inputValue.value += `${button4.textContent}`
    }

    function addButtonNumb1 () {
        inputValue.value += `${buttonNumb1.textContent}`
    }
    function addButtonNumb2 () {
        inputValue.value += `${buttonNumb2.textContent}`
    }
    function addButtonNumb3 () {
        inputValue.value += `${buttonNumb3.textContent}`
    }
    function addButtonNumb4 () {
        inputValue.value += `${buttonNumb4.textContent}`
    }
    function addButtonNumb5 () {
        inputValue.value += `${buttonNumb5.textContent}`
    }
    function addButtonNumb6 () {
        inputValue.value += `${buttonNumb6.textContent}`
    }
    function addButtonNumb7 () {
        inputValue.value += `${buttonNumb7.textContent}`
    }
    function addButtonNumb8 () {
        inputValue.value += `${buttonNumb8.textContent}`
    }
    function addButtonNumb9 () {
        inputValue.value += `${buttonNumb9.textContent}`
    }
    function addButtonNumb0 () {
        inputValue.value += `${buttonNumb0.textContent}`
    }
    function addButtonClean () {
        inputValue.value = ''
    }

    const inputValue = document.querySelector('.calc_input')

        document.querySelector('.buttonClick').addEventListener('click', addButton1)
        document.querySelector('.buttonClick2').addEventListener('click', addButton2)
        document.querySelector('.buttonClick3').addEventListener('click', addButton3)
        document.querySelector('.buttonClick4').addEventListener('click', addButton4)
        document.querySelector('.buttonClickNumb1').addEventListener('click', addButtonNumb1)
        document.querySelector('.buttonClickNumb2').addEventListener('click', addButtonNumb2)
        document.querySelector('.buttonClickNumb3').addEventListener('click', addButtonNumb3)
        document.querySelector('.buttonClickNumb4').addEventListener('click', addButtonNumb4)
        document.querySelector('.buttonClickNumb5').addEventListener('click', addButtonNumb5)
        document.querySelector('.buttonClickNumb6').addEventListener('click', addButtonNumb6)
        document.querySelector('.buttonClickNumb7').addEventListener('click', addButtonNumb7)
        document.querySelector('.buttonClickNumb8').addEventListener('click', addButtonNumb8)
        document.querySelector('.buttonClickNumb9').addEventListener('click', addButtonNumb9)
        document.querySelector('.buttonClickNumb0').addEventListener('click', addButtonNumb0)
        document.querySelector('.buttonClickClean').addEventListener('click', addButtonClean)

    function getResult () {
        
        let result = inputValue.value

        let b = result.match(/\+|-|\*|\/|\d+/g)

for (let i=0; i < b.length; i++) 
{
		if (i===0) {result = parseInt(b[i])}

                switch (b[i])
                {
                case '+' :
                result += parseInt(b[i+1])
                ++i
                console.log(parseInt(b[i+1]))
                break
                
                case '-':
                result -= parseInt(b[i+1])
                ++i
                break
                
                case '/':
                result /= parseInt(b[i+1])
                ++i;
                break
                
                case '*':
                result *= parseInt(b[i+1]); 
                ++i
                break
                
                }
        }
    inputValue.value = result
    }
    document.querySelector('.get_result').addEventListener('click', getResult)
}

