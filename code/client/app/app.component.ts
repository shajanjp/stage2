import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  constructor(
    private changeDetector: ChangeDetectorRef) {
  }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
