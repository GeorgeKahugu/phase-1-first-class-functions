function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(name){
  return receivesAFunction

}

function returnsAnAnonymousFunction(anonymous){
    return () => {}
}







