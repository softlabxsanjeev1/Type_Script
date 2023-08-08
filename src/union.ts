  function combine(a:number | string,b:number | string)   
  // we also use any if we donot know which type of value come to fun
  {
    if( typeof a === 'number' && typeof b === 'number')
    {
        return a+b;
    }
    else
    {
        return a.toString() + b.toString();
    }   
  }

  console.warn(combine(10,20));
  console.warn();
  console.warn("Sanjeev ","Kumar")


//   literals
