import { Injectable } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})

export class Utils {
  constructor(private domSanitizer: DomSanitizer) {
  }

  /**
   * Bypass security and trust the given value to be safe style value (CSS).
   *
   * @param url Image URL
   * @returns Trusted style URL or nothing of not provided
   */
  sanitizeBackgroundImage(url: string): SafeStyle | null {
    if (url) {
      return this.domSanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
    return null;
  }
}
