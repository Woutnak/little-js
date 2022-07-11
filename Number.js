let Number ={
    factorial : function(n){
 let fact=1;
      for (let i=1;i <= n; i++){
          fact *= i;
    }
  return fact;
    },
    cube : function(n){
      return n ** 3;
    },
    sqrt:function(n){
      return n**2;
    },
    addUp:function(n){
    let somme=0;
	for(let i=0;i<=n;i++){
    somme+=i;
	}
	return somme;
    },
    isFirst:function(n){
      for(let i = 2;i<n;i++){
        if (n % i === 0){
            return false
                            }
        }
        return true
    }
};
console.log(number.isFirst(4));
