var content = { 
	"area_tianjin"  :"素的提留杠开提留捉五杠开捉五龙杠开龙捉五龙杠开捉五龙本混龙杠开本混龙本混捉五龙杠开本混捉五龙素提留杠开素提留素捉五杠开素捉五素龙杠开素龙素捉五龙杠开素捉五龙混吊杠开混吊混吊龙杠开混吊龙混吊本混龙杠开混吊本混龙双混吊杠开双混吊双混吊捉五杠开双混吊捉五双混吊龙杠开双混吊龙双混吊捉五龙杠开双混吊捉五龙双混吊本混龙杠开双混吊本混龙双混吊本混捉五龙杠开双混吊本混捉五龙素本龙杠开素本龙素本五龙杠开素本五龙天胡胡胡杠开素的地胡七小对混吊七对飘胡胡杠开十三幺本混十三幺暴成干插上大台上二台",
}

var checkRepeat = (o)=>{
    var m = new Map()
    for(let k in o){
        var s = new Set()
        for (let c of o[k]) {
            s.add(c);
        }

        var str = ""
        for (let v of s) {
            str += v;
        }
      
        if (!m.has(k)) {
            m.set(k, str)
        }
        console.log(m.get(k),"去重后个数:",k[0]+k[1]+k[2]+k[3],m.get(k).length)        
    }
}
checkRepeat(content)