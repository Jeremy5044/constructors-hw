function Dog (data) {
  data = data || {};
  this.status = "normal";
  this.color = data.color;
  this.hungry = data.hungry !== undefined ? data.hungry : true;
  // data.hungry = false?
  // this.hungry = false || true;
  // this.hungry = data.hungry || true;
  // if (data.hungry !== undefined) {
  //   this.hungry = data.hungry;
  // } else {
  //   this.hungry = true;
  // }
}

export { Dog };
