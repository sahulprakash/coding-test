import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if (!value) return [];
    if (!args) return value;

    let newList = value.filter((el: any) =>
     (el?.user?.name?.first?.toLowerCase().includes(args.toLowerCase()) ||
     el?.user?.name?.last?.toLowerCase().includes(args.toLowerCase()) ||
     el?.user?.name?.title?.toLowerCase().includes(args.toLowerCase())   )
    );
    return newList ? newList : value;
  }
}
