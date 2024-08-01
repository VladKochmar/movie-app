import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true,
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string | null, fallback: string): string {
    return value ? value : fallback;
  }
}
