import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splice'
})
export class SplicePipe implements PipeTransform {
  transform(value: any[], curr: number, size: number): any[] {
    if (!value?.length) {
      return [];
    }
    const ref = JSON.parse(JSON.stringify(value));
    return ref.splice(curr * size,  (curr * size) + size);
  }
}
