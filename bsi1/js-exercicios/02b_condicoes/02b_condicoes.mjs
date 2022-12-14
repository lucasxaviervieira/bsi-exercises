// Lista de exercícios - Condições (Adicional)
// Utilize if-else para resolver cada problema.
// Procure não utilizar funções prontas da linguagem, use if em todas as situações possíveis.
// Tente refinar as condições, fazendo o mais simples possíveis.

export function situacaoAluno(nota1, nota2, nota3, faltas, aulasMinistradas) {
    /*
    A média do aluno é dada pela média aritmética simples entre as 3 notas.
    Se o aluno tiver mais de 25% de faltas, está automaticamente reprovado por faltas (RF).
    Se ele tiver média abaixo de 7.0, está em Exame Final (EF)
    Se tiver média acima de 7.0 e frequencia igual ou superior a 75% está aprovado (AP).

    Argumentos:
        nota1 (float): 1a nota
        nota2 (float): 2a nota
        nota3 (float): 3a nota
        faltas (int): número de faltas
        aulas_ministradas (int): quantidade de aulas ministradas

    Retorna:
        string: a situação do aluno
    */
   var media = ((nota1 + nota2 + nota3) / 3)
   var faltasReprovado = (aulasMinistradas * 0.25)
   if (faltas > faltasReprovado) {
        return "RF"
   } else if (media >= 7) {
        return "AP"
   } else if (media < 7) {
        return "EF"
   }
}

export function aumentoPreco(preco) {
    /*
    Calcula o aumento do preço, baseado no seguinte critério:
    - até 280 (inclusive): aumento de 20%
    - até 700 (inclusive): aumento de 15%
    - até 1500 (inclusive): aumento de 10%
    - acima de 1500: aumento de 5%

    Argumentos:
        preco (float): o preço atual do produto

    Retorna:
        tupla de floats: preco atual, percentual de aumento, valor do aumento e
                            novo preço, todos com duas casas decimais.
    */
    if (preco <= 280) {
        return [preco, (100 * 0.20),((preco * 0.20)),preco + (preco * 0.20)]
    } else if (preco <= 700) {
        return [preco, (100 * 0.15),((preco * 0.15)),preco + (preco * 0.15)]
    } else if (preco <= 1500) {
        return [preco, (100 * 0.10),((preco * 0.10)),preco + (preco * 0.10)]
    } else if (preco > 1500) {
        return [preco, (100 * 0.05),((preco * 0.05)),preco + (preco * 0.05)]
    }
}

export function idadeCanina(idadeHumana, porteDoCao) {
    /*
    É sabido que os caẽs amadurecem mais rapidamente do que os seres
        humanos (na verdade, alguns serem humanos parecem nunca amadurecer).
    Calcule sua idade canina, baseada nos seguintes fatores:
    - cães de porte pequeno: fator 5
    - cães de porte médio: fator 6
    - cães grandes: fator 7.

    Argumentos:
        idadeHumana (int): a idade do ser humano
        porteDoCao (string): um texto informando o porte do cão (veja os testes para detalhes)

    Retorna:
        int: a idade canina do ser humano
    */

    if (porteDoCao == "pequeno") {
        return Math.floor(idadeHumana / 5)
    } else if (porteDoCao == "medio") {
        return Math.floor(idadeHumana / 6)
    } else if (porteDoCao == "grande") {
        return Math.floor(idadeHumana / 7)
    }
    
}

export function aumentoSalario(salario) {
    /*
    Calcule o aumento de salário de acordo com a seguinte tabela:
    - até 1 SM(inclusive): aumento de 20%
    - de 1 até 2 SM(inclusive): aumento de 15%
    - de 2 até 5 SM(inclusive): aumento de 10%
    - acima de 5 SM: aumento de 5%

    Salário mínimo para referência: R$ 724,00

    Argumentos:
        salario (float): o salario atual

    Retorna:
        float: novo salário, com duas casas decimais.
    */

    var salMin = 724
    if (salario <= salMin) {
        return (salario + (salario * 0.20))
    } else if (salario <= (salMin * 2)) {
        return (salario + (salario * 0.15))
    } else if (salario <= (salMin * 5)) {
        return (salario + (salario * 0.10))
    } else if (salario > (salMin * 5)) {
        return (salario + (salario * 0.05))
    }

}

export function notaParaConceito(nota) {
    /*
    Converta a nota para conceito, conforme a tabela abaixo:
    Nota                     Conceito
    Entre 10.0 e 9.0            A
    Entre 8.9 e 8.0             B
    Entre 7.9 e 7.0             C
    Entre 6.9 e 6.0             D
    Entre 5.9 e zero            E

    Argumento:
        nota(float): a nota, com 1 casa decimal

    Retorna:
        string: o conceito correspondente
    */

    if (nota < 6 && nota >= 0) {
        return "E"
    } else if (nota < 7 && nota >= 6) {
        return "D"
    } else if (nota < 8 && nota >= 7) {
        return "C"
    } else if (nota < 9 && nota >= 8) {
        return "B"
    } else if (nota <= 10 && nota >= 9) {
        return "A"
    }

}

export function imc(peso, altura) {
    /*
    Escreva uma função que calcula o índice de massa corporal (imc = peso / altura ** 2),
    de acordo com a seguinte tabela:

    imc <= 18.5: "Subpeso"
    imc <= 25.0: "Normal"
    imc <= 30.0: "Sobrepeso"
    imc > 30: "Obeso"

    Argumentos:
        peso (float): peso em Kg
        altura (float): altura em metros

    Retorna:
        string: índice de massa corporal
    */
    let imc = peso / (altura ** 2)

    if (imc <= 18.5) {
        return "Subpeso"
    } else if (imc <= 25) {
        return "Normal"
    } else if (imc <= 30) {
        return "Sobrepeso"
    } else if (imc > 30) {
        return "Obeso"
    }


}

export function converteHora24Para12(horario) {
    /*
    Recebe um horário no formato 24 horas e retorna no formato 12 horas (am/pm).
    - am: antes do meio-dia
    - pm: depois do meio-dia

    Para detalhes. consulte: https://pt.wikihow.com/Converter-o-Hor%C3%A1rio-do-Formato-24h-Para-12h

    Argumento:
        horario (string): um horário no formato 24 horas

    Retorna:
        string: horario no formato 12 horas (am/pm)

    */

    
    var horas = parseFloat(horario.substr(0,2))
    var minutos = (horario.substr(2,4))

    if (horas == 0) {
        horas += 12
        return (`${horas}` + minutos + " am")
    } else if (horas < 12) {
        return (`${horas}` + minutos + " am")
    } else if (horas == 12) {

    } else if (horas <= 24)
        horas -= 12
        return (`${horas}` + minutos + " pm")

}

export function converteHora12Para24(horario) {
    /*
    Recebe um horário no formato 12 horas (am/pm) e retorna no formato 24 horas.
    - am: antes do meio-dia
    - pm: depois do meio-dia

    Para detalhes. consulte: https://pt.wikihow.com/Converter-o-Hor%C3%A1rio-do-Formato-24h-Para-12h

    Argumento:
        horario (string): um horário no formato 12 horas (am/pm)

    Retorna:
        string: horario no formato 24 horas
    */



    // if (horario.length == 6) {
    //     horario = "0" + horario
    // }

    if (horario.length == 7) {
        horario = "0" + horario
    }
    var horas = horario.substr(0,2)
    var minutos = horario.substr(2,3)
    var am_pm = (horario.substr(5,3)).replace(" ", "")


    if (parseFloat(horas) === 12 && am_pm == "am") {
        return ("00" + minutos)
    } else if (parseFloat(horas) < 12 && am_pm == "am") {
        return (horas + minutos)
    } else if (parseFloat(horas)  === 12 && "pm") {
        return (horas + minutos)
    } else if (parseFloat(horas) < 12 && am_pm == "pm") {
        horas = parseFloat(horas)
        horas += 12
        horas = String(horas)
        return (horas + minutos)
    }
    
}

export function contaCombustivel(
    quantidadeLitros,
    tipoCombustivel,
    tipoPagamento
) {
    /*
    O posto Tabajara está vendendo combustíveis com a seguinte tabela de preços:
        a. Tabela de preços
            Álcool: R$ 3,159
            Gasolina: R$ 3,739
            Diesel: 3,090
        b. Se o pagamento for feito à vista ou débito, o cliente recebe um desconto de 10% sobre o valor total
        c. Escreva um função que leia o número de litros vendidos, o tipo de combustível (gasolina, álcool, diesel),
            e o tipo de pagamento (à vista, débito, crédito), calcule e devolva o valor total da compra.

    Argumentos:
        quantidadeLitros (float): quantidade de litros vendida
        tipoCombustivel (string): uma letra indicando o tipo de combustível
        tipoPagamento (string): uma letra, indicando o tipo de pagamento

    Retorna:
        float: o valor a ser pago, com duas casas decimais
    */

    var alcool = 3.159
    var gasolina = 3.739
    var diesel = 3.090
    
    var precoPagar = 0

    if (tipoCombustivel == "a") {
        var precoPagar = quantidadeLitros * alcool
        if (tipoPagamento == "v" | (tipoPagamento == "d")) {
            precoPagar = precoPagar - (precoPagar * 0.10)
        }
    } else if (tipoCombustivel == "g") {
        var precoPagar = quantidadeLitros * gasolina
        if (tipoPagamento == "v" | (tipoPagamento == "d")) {
            precoPagar = precoPagar - (precoPagar * 0.10)           
        }
    } else if (tipoCombustivel == "d") {
        var precoPagar = quantidadeLitros * diesel
        if (tipoPagamento == "v" | (tipoPagamento == "d")) {
            precoPagar = precoPagar - (precoPagar * 0.10)           
        }
    }

    return parseFloat(precoPagar.toFixed(2))
}

export function comprar_frutas({ morango = 0, uva = 0 }) {
    /*
    Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                          Até 5 Kg           Acima de 5 Kg
    Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
    Uva             R$ 1,80 por Kg          R$ 1,50 por Kg

    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da
    compra ultrapassar R$ 25,00, receberá ainda um desconto de 10%
    sobre este total.
    Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a
    quantidade (em Kg) de uvas adquiridas e escreva o valor a ser
    pago pelo cliente.

    Argumentos:
        morango (float): a quantidade de morangos, em Kg
        uva (float): a quantidade de uvas, em Kg

    Retorna:
        float: o preço a pagar, com 2 casas decimais
    */

    if (morango <= 5) {
        var valorMorango = morango * 2.50
        if (uva <= 5) {
            var valorUva = uva * 1.80
        } else {
            valorUva = uva * 1.50
        }
    } else {
        valorMorango = morango * 2.20
        if (uva <= 5) {
            var valorUva = uva * 1.80
        } else {
            valorUva = uva * 1.50
        }
    }    
    var valor = valorMorango + valorUva
    
    if ((morango + uva) > 8 | valor > 25) {
        valor = valor - (valor * 0.10)
    }
    
    return parseFloat(valor.toFixed(2))
    

}
