import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
 imports: [],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(GifService);

    scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
   if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.clientHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    if (isAtBottom) {
      // TODO: cargar la siguiente página de gifs
    }
  }

}
