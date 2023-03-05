
                // Function of Addittion

                function Add() {
                    var firstNumber = document.getElementById("input1").value;
                    var secondNumber = document.getElementById("input2").value;
                
                    var result = +firstNumber + +secondNumber;
                
                    document.getElementById("result").innerText = `Your answer is ${result}`;
                }
                                // Function of Subtraction
                
                function Sub() {
                    var firstNumber = document.getElementById("input1").value;
                    var secondNumber = document.getElementById("input2").value;
                
                    var result = +firstNumber - +secondNumber;
                
                    document.getElementById("result").innerText = `Your answer is ${result}`;;
                }
                                // Function of Multiplication
                
                function Mul() {
                    var firstNumber = document.getElementById("input1").value;
                    var secondNumber = document.getElementById("input2").value;
                
                    var result = +firstNumber * +secondNumber;
                
                    document.getElementById("result").innerText = `Your answer is ${result}`;;
                }
                            // Function of Division
                
                function Div() {
                    var firstNumber = document.getElementById("input1").value;
                    var secondNumber = document.getElementById("input2").value;
                
                    var result = +firstNumber / +secondNumber;
                
                    document.getElementById("result").innerText =`Your answer is ${result}`;;
                }