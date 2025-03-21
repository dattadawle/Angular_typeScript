import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age' //metadata
})
export class AgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    let current= new Date();
    let val= new Date(value as string)
    // return val.getFullYear();

    if (args!=null && args.length>0)
    {
      let criteria=args[0];
      if (criteria =='year'){
        return current.getFullYear()-val.getFullYear()  + "years";
      }
      else if(criteria=='month')
      {
        return current.getMonth()-val.getMonth() + " months";
      }
      else if(criteria =='day'){
        return current.getDate() -val.getDate() + ' days'
      }
    }
    return current.getFullYear() - val.getFullYear() + " years";
  }

}
