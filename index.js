function scuberGreetingForFeet(a){
  // Write your code here!
  if (a<400){
    return 'This one is on me!'
  } else if(a>400 && a<=2000){
    return 'That will be twenty bucks.'
  } else if (a>2000 && a<=2500){
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(a){
  // Write your code here!
    return a==="NYC"?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(a){
  // Write your code here!
    if (a==='generous'){
        return 'Thank you so much.'
    } else if(a!=='generous'){
        return 'Thank you.'
    } else{
        return 'Bye.'
    }
}