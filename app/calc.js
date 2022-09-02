export function runingCalc () {
    const bodyPage = document.querySelector('.body_page')
    bodyPage.innerHTML = ''

    const divMain = document.createElement('div'),
          div = document.createElement('div'),
          input = document.createElement('input'),
          spanNameCalc = document.createElement('span'),
          divSpanNameCalc = document.createElement('div'),
          divCalc = document.createElement('div')

          spanNameCalc.textContent = 'My first calculator JS (ver. 2.1)'
          spanNameCalc.className = 'spanNameCalc'
          divMain.className = 'divMAinCalc'
          divCalc.className = 'divCalc'
          divSpanNameCalc.className = 'name-calc'

          input.value = ''
          input.placeholder = `  enter a number...`
          input.className = 'calc_input'

          div.append(input)
          divSpanNameCalc.append(spanNameCalc) 


    const div3 = document.createElement('div'),
          button1 = document.createElement('button'),
          button2 = document.createElement('button'),
          button3 = document.createElement('button'),
          button4 = document.createElement('button'),
          buttonBackspace = document.createElement('button'),
          buttonSquareNumber = document.createElement('button'),
          buttonRootNumber = document.createElement('button')

          button1.textContent = '+'
          button1.className = 'buttonDigit buttonStyle'
          button2.textContent = '-'
          button2.className = 'buttonDigit buttonStyle'
          button3.textContent = '*'
          button3.className = 'buttonDigit buttonStyle'
          button4.textContent = '/'
          button4.className = 'buttonDigit buttonStyle'
          buttonBackspace.textContent = '←'
          buttonBackspace.className = 'buttonBackSpace buttonStyle'
          buttonSquareNumber.textContent = 'x²'
          buttonSquareNumber.className = 'buttonSquare buttonStyle'
          buttonRootNumber.textContent = '√'
          buttonRootNumber.className = 'buttonRoot buttonStyle'

          div3.append(buttonBackspace, buttonSquareNumber, buttonRootNumber, button1)
          

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
                buttonClean = document.createElement('button'),
                buttonResult = document.createElement('button'),
                buttonPoint = document.createElement('button')

                buttonNumb1.textContent = '1'
                buttonNumb1.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb2.textContent = '2'
                buttonNumb2.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb3.textContent = '3'
                buttonNumb3.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb4.textContent = '4'
                buttonNumb4.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb5.textContent = '5'
                buttonNumb5.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb6.textContent = '6'
                buttonNumb6.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb7.textContent = '7'
                buttonNumb7.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb8.textContent = '8'
                buttonNumb8.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb9.textContent = '9'
                buttonNumb9.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonNumb0.textContent = '0'
                buttonNumb0.className = 'buttonDigit buttonStyle buttonNumberStyle'
                buttonPoint.textContent = '.'
                buttonPoint.className = 'buttonDigit buttonStyle'
                buttonClean.textContent = 'CE'
                buttonClean.className = 'buttonClean buttonStyle'
                buttonResult.textContent = '='
                buttonResult.className = 'buttonResult buttonStyle'

                divNumb123.append(buttonNumb1, buttonNumb2, buttonNumb3, button2)
                divNumb456.append(buttonNumb4, buttonNumb5, buttonNumb6, button3)
                divNumb789.append(buttonNumb7, buttonNumb8, buttonNumb9, button4)
                divNumb0.append(buttonPoint, buttonNumb0, buttonClean, buttonResult)

                divCalc.append(divSpanNameCalc, div, div3, divNumb123, divNumb456, divNumb789, divNumb0)
                divMain.append(divCalc)
                bodyPage.append(divMain)

    const inputValue = document.querySelector('.calc_input')

        function buttonCalc() {
            inputValue.value += `${this.textContent}`
        }

        function buttonSquareCalc() {
            inputValue.value *= inputValue.value
            if (isNaN(inputValue.value)) {
                inputValue.value = 'enter a number...'
            } else {
                inputValue.value = inputValue.value
            }           
        }

        function buttonRootCalc() {
            inputValue.value = Math.sqrt(inputValue.value)
            if (isNaN(inputValue.value)) {
                inputValue.value = 'enter a number...'
            } else {
                inputValue.value = inputValue.value
            }           
        }

        function buttonBackSpace() {
            inputValue.value = inputValue.value.substring(0, inputValue.value.length-1)
        }

        document.querySelectorAll('.buttonDigit').forEach (p => { p.addEventListener('click', buttonCalc) })
        document.querySelector('.buttonSquare').addEventListener('click', buttonSquareCalc)
        document.querySelector('.buttonRoot').addEventListener('click', buttonRootCalc)
        document.querySelector('.buttonBackSpace').addEventListener('click', buttonBackSpace)

        function cleanInput () {
            inputValue.value = ''
        }
        document.querySelector('.buttonClean').addEventListener('click', cleanInput)

    function getResult () {
        
        let result = inputValue.value

        let firstNumb = parseFloat(result)
        result = result.replace(firstNumb, '')
        let arrayMathOperatorAndSecondNumb = result.match(/\+|-|\*|\/|\d+/g)
        let mathOperator = arrayMathOperatorAndSecondNumb[0]
        let secondNubm = parseFloat(result.split(mathOperator).join(''))
        console.log(firstNumb, mathOperator, secondNubm)

            switch (mathOperator)
            {
            case '+' :
                result = firstNumb + secondNubm
            break

            case '-':
                result = firstNumb - secondNubm
            break
            
            case '/': 
            result = firstNumb / secondNubm
            break
            
            case '*':
                result = firstNumb * secondNubm
            break
            }

        if (isNaN(result)) {
            inputValue.value = `  result is not defined`
        } else if (!isFinite(result)) {
            inputValue.value = `  division by zero is not possible`
        } else {
           inputValue.value = result.toFixed(5)
        }
    }

    document.querySelector('.buttonResult').addEventListener('click', getResult)
}



