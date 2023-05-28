   {let conta = 1
   let soma = 0
   let quantidade = Number(prompt('Informe quantas idades serão digitadas: '))
     while(conta <= quantidade){
      let idade = Number(prompt('informe uma idade'))
        conta = conta + 1
        soma  = soma + idade 
     }


       console.log(" A média das idades é: " + soma / quantidade )
    }



       //exercício 3 (OK)
       // Template String = alert (`Bom dia ${nome da variável}´) é a mesma coisa de usar ("bom dia " + nome)
       {
        let idade;
        let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
        let conta = 1
        while (conta <=8){
          conta++
            idade = Number(prompt(`Informe a idade ${conta}`))
            
            if((idade >=0)&&(idade <= 15)){
              f1++
            }
            else if ((idade >=16)&&(idade<=30)){
              f2++
            }
            else if((idade >=31)&&(idade<=45)){
              f3++
            }
            else if((idade >=46)&&(idade<=60)){
              f4++
            }
            else if((idade >=61)){
              f5++

            }

       

       }
             alert(`Fx1 ${f1} Fx2 ${f2} Fx3 ${f3} Fx4 ${f4} Fx5 ${f5}`)
             alert(`%Fx1: ${f1/8*100} %Fx5: ${f5/8*100}`)
      }


       //exercício 4 (OK)

       {
            
             let numero = Number(prompt(`Informe um número: `))
             let quantidade = 0

             while(quantidade <10){
             quantidade++ //variável++ = variável = variável + 1
             conta = numero * quantidade 

             console.log(numero, 'X', quantidade, '=', conta)
             }
          

       }



       //exercício 5 (OK)
       {

        for (let i = 1; i <= 10; i++) {
          console.log(`Tabuada do ${i}:`);
          for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
          }
          console.log('\n');
        }

       }


       //exercício 1 (ok)
       {
        let conta = 1; let conta2 = 1
        let a, b, c, d, aux
        while(conta2 <= 5){

        a = Number(prompt("Informe A: "))
        b = Number(prompt("Informe B: "))
        c = Number(prompt("Informe C: "))
        d = Number(prompt("Informe D: "))
        let conta = 1

       
        
        while (conta <= 5){
          if(a > b){aux = a; a = b; b = aux;}

          if(b > c){aux = b; b = c; c = aux;}

          if(c > d){aux = c; c = d; d = aux;}
          conta++
        }
      

        alert(`ordem crescente ${a}, ${b}, ${c} e ${d}`)
        alert(`ordem decrescente ${d}, ${c}, ${b} e ${a}`)
  
        conta2++
      }
     
      

           


       }


       //exercício 6 (ok)


      {
        
      let codigo 
      let valor; let totalVista = 0;
      let conta = 1; let totalPrazo = 0;
      while (conta <= 5){
        codigo = prompt(' Informe P ou V: ').toUpperCase() // toUpperCase faz com que mesmo que o úsuario nn digite, vire maíusculo
        valor = Number(prompt('Informe o valor: '))
        if(codigo == 'P'){
         totalPrazo += valor
        }
           
        else if(codigo == 'V'){
          totalVista += valor

        }
        else{
          alert('Código inválido, valor não será considerado')
          continue //continua na proxima interação e não irá fazer o conta ++, ele volta para o while e não passa para o continue

        }
        
        conta++
        
            
      }
      let total = totalVista + totalPrazo
      let valorParcela = totalPrazo / 3
                 // to fixed arredonda as casas depois da virgula
      console.log(`Total à vista: ${totalVista} Total à prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`)

      }


      //exercício 20 (ok)
      {
         let opcao
         
         do{
          opcao = Number(prompt('\n 1. Média aritmética \n 2. Média Ponderada \n 3. Sair'))
             switch (opcao){
              case 1: 
              let mediaAri
              

              let n1 = Number(prompt('Digite o valor da nota 1: ')) 
              let n2 = Number(prompt('Digite o valor da nota 2: '))
              mediaAri = (n1+n2) / 2
              alert(`Média atitimética:  ${mediaAri}`)

              break

              case 2: 
              let mediaPond
              
              

              let N1 = Number(prompt('Digite o valor da nota 1: '))
               let p1 = Number(prompt('Digite o pesp da nota 1: '))
              let N2 = Number(prompt('Digite o valor da nota 2: '))
               let p2 = Number(prompt('Digite o peso da nota 2: '))
              let N3 = Number(prompt('Digite o valor da nota 3: '))
               let p3 = Number(prompt('Digite o peso da nota 3: '))
               mediaPond = (N1 + N2 + N3) / (p1 + p2 + p3)
               alert(`Média Ponderada:  ${mediaPond}`)

              break

              case 3: alert('Progama será encerrado').break
                   default:  console.log('Opção inválida')
             }
         }
         while(opcao != 3)
      }

        
      //exercício 21(ok)

      

        {
          let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, total = 0, nulos = 0, branco = 0;
          let opcao
          

          do{
            opcao = Number(prompt('Escolha a opção: \n 1. Cand1 \n 2. Cand2 \n 3. Cand3 \n 4. Cand4 \n 5. Nulo \n 6. Branco \n 0. Sair'))
            switch(opcao){

            case 1:  cand1++; break
            case 2:  cand2++; break
            case 3:  cand4++; break
            case 4:  cand4++; break
            case 5:  nulos++; break
            case 6:  branco++;break
            default: alert('Opção Inválida')

          }


         }
         while(opcao != 0)
         total = cand1 + cand2 + cand3 + cand4 + nulos + branco
         alert('% de votos nulos ${nulos / total * 100}')
         alert('% de votos branco ${branco / total * 100}')
        
      }


      //vetores
      {
        let preco; let soma = 0
        alert("Informe 10 preços")

        for(let conta = 0; conta <10; conta++){
          preco = Number(prompt(`Preço ${conta+1}`))
          soma = soma + preco
        }
        alert(`A média é ${soma/10}`)

      }

      

        function somaVetor(){
          let precos = []

          let soma = 0
          for (let i = 0; i<10; i++){
          precos[i] = Number(prompt(`Informe ${i+1}o. preço`))
        }

        for(let i = 0; i<10; i++){
          soma = soma + precos[i]

        }

        alert(`A média dos preços é ${soma/10}`)



      }

      //exercício 23(ok)
      {



      }

      //exercício 1
      
          let valores = []
          let soma = 0
          

          for(let i = 0; i<10; i++){
            valores[i] = Number(prompt(`Informe ${i + 1}º valor`))
          } 

          for(let i = 0; i <10; i++){
            if (i % 2 == 0)
            soma = soma + valores[i]
            }
          
          
          alert(`A soma dos pares é ${soma}`)


          //exercício 22 (ok)
          {
           
                vetor_A = []
                for (i in range(10):)
                  valor = int(input('Digite o valor {i+1} do vetor A: '))
                  vetor_A.append(valor)

                vetor_B = []
                for (valor in vetor_A:)
                  if (valor > 0:)
                      vetor_B.append(valor)

                print("Vetor B (compactado):", vetor_B)

          }


            //exercício 7 (ok)
          {
             

            // Preenchendo o vetor com números reais
                vetor = []
                for (i in range(10))
                    numero = float(input(f"Digite o número {i+1}: "))
                    vetor.append(numero)

                //Calculando a quantidade de números negativos e a soma dos positivos
                quantidade_negativos = 0
                soma_positivos = 0

                for (numero in vetor)
                    if (numero < 0)
                        quantidade_negativos += 1
                    else:
                        soma_positivos += numero

                //Mostrando os resultados
                print("Quantidade de números negativos:", quantidade_negativos)
                print("Soma dos números positivos:", soma_positivos)

          }



      


       



    
