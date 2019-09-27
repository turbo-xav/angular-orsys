import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'civility'
})
export class CivilityPipe implements PipeTransform {

  transform(name: string , lang = 'es'): string {
    const labels = {
      fr: 'Monsieur' ,
      es: 'Senior'
    };

    return `${labels[lang]} : ${name}`;
  }

}
