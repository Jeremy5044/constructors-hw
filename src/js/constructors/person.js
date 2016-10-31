function Person (selections) {

  const selct = selections || {};
  
  if ( selct.cool === true) {
    
    this.cool = true;
  } else {

   this.cool = false}
};
  Person.prototype.feed = function (data) {
    return data.hungry = false;
  }
  Person.prototype.pet = function (data) {
  return data.status = 'happy';
};

export { Person };
