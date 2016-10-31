function Dog (selections) {
  const selct = selections || {};
  this.status = selct.status || 'normal';
  this.color = selct.color || 'black';

  if (selct.hungry === false){
      this.hungry = false;
    } else {
      this.hungry = true;
    };

};

export { Dog };

