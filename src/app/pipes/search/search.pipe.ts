import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], prop: string, search: string): any[] {
    if (!value?.length || !prop || !search) {
      return value || [];
    }

    return value.filter( item => item[prop].toLowerCase().includes(search.toLowerCase()));
  }
}
