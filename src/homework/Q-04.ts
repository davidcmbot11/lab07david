(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  //function calculateOperation1(a: number, b: number, c: number): number {
  //  let sumResult = a + b;
  //  let multiplicationResult = sumResult * c;
  //  return multiplicationResult;
  //}

  function calculateOperation(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }

  // EX - 2
  interface IShape {
    shape: string,
    length?: number,
    width?: number,
    radius?: number
  }
  
  function calculateArea({
    shape,
    length,
    width,
    radius
  }: IShape) {
    switch(shape) {
      case 'rectangle': {
        if(length && width) return length * width;  
        break;
      }
      case 'circle': {
        if (radius) return Math.PI * radius * radius;
        break;
      }
      default: {
        throw new Error('invalid type of shape');
        break;
      }
    }
  } 
  
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }
//
  //function calculateCircleArea(radius: number): number {
  //  return Math.PI * radius * radius;
  //}

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  //function validateEmail(email: string): boolean {
  //  //...some code for validate here
  //  return false;
  //}
//
  //function validateUsername(username: string): boolean {
  //  //...some code for validate here
  //  return false;
  //}

  function validate() {
    //...some code for validate here
    return false;
  }  

})();