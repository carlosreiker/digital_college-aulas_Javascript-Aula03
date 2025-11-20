(function(){
  const form = document.getElementById('imcForm');
  const alturaInput = document.getElementById('altura');
  const pesoInput = document.getElementById('peso');
  const resultEl = document.getElementById('result');
  const clearBtn = document.getElementById('clearBtn');

  function format(num){
    return Number(num).toFixed(2);
  }

  function categoria(imc){
    if(imc < 16) return 'Magreza grau III';
    if(imc >= 16 && imc <= 16.9) return 'Magreza grau II';
    if(imc >= 17 && imc <= 18.4) return 'Magreza grau I';
    if(imc >= 18.5 && imc <= 24.9) return 'Eutrofia (peso normal)';
    if(imc >= 25 && imc <= 29.9) return 'Pré-Obesidade';
    if(imc >= 30 && imc <= 34.9) return 'Obesidade (grau I)';
    if(imc >= 35 && imc <= 39.9) return 'Obesidade (grau II)';
    return 'Obesidade (grau III)';
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // altura está em centímetros no formulário
    const alturaCm = Number(alturaInput.value);
    const peso = Number(pesoInput.value);

    if(!alturaCm || alturaCm <= 0){
      resultEl.textContent = 'Altura inválida. Informe um valor em centímetros (ex: 180).';
      resultEl.style.color = 'crimson';
      alturaInput.focus();
      return;
    }

    // valida limite de 3 dígitos para altura (30-999)
    if(alturaCm < 30 || alturaCm > 999){
      resultEl.textContent = 'Altura deve estar entre 30 e 999 cm (até 3 dígitos).';
      resultEl.style.color = 'crimson';
      alturaInput.focus();
      return;
    }

    if(!peso || peso <= 0){
      resultEl.textContent = 'Peso inválido. Informe um valor em kg (ex: 70.5).';
      resultEl.style.color = 'crimson';
      pesoInput.focus();
      return;
    }

    // valida limite de 3 dígitos na parte inteira do peso (1-999)
    const pesoInt = Math.trunc(peso);
    if(pesoInt < 1 || pesoInt > 999){
      resultEl.textContent = 'Peso deve ter até 3 dígitos (1 - 999 kg).';
      resultEl.style.color = 'crimson';
      pesoInput.focus();
      return;
    }

    // converte cm para metros antes do cálculo
    const altura = alturaCm / 100;
    const imc = peso / (altura ** 2);
    const cat = categoria(imc);
    resultEl.textContent = `Seu IMC é ${format(imc)} — ${cat}`;
    resultEl.style.color = '#1a7f37';
  });

  clearBtn.addEventListener('click', ()=>{
    form.reset();
    resultEl.textContent = '';
    alturaInput.focus();
  });

  // limita entradas enquanto o usuário digita: altura (inteiro, até 3 dígitos), peso (parte inteira até 3 dígitos)
  alturaInput.addEventListener('input', (e)=>{
    let v = e.target.value;
    // remover sinais negativos e zeros à esquerda indesejados
    v = v.replace(/[^0-9]/g, '');
    if(v.length > 3) v = v.slice(0,3);
    // evitar campo vazio com 0 à esquerda
    if(v === '') e.target.value = '';
    else e.target.value = String(Number(v));
  });

  pesoInput.addEventListener('input', (e)=>{
    let v = e.target.value;
    // permite dígitos e um ponto decimal
    v = v.replace(/[^0-9.]/g, '');
    const parts = v.split('.');
    // limitar parte inteira a 3 dígitos
    parts[0] = parts[0].slice(0,3);
    // recompor (mantém até uma casa decimal ou mais conforme input)
    if(parts.length > 1) v = parts[0] + '.' + parts[1].slice(0,3);
    else v = parts[0];
    e.target.value = v;
  });
})();

