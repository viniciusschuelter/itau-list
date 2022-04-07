import {NgModule} from '@angular/core';
import {SplicePipe} from "./splice.pipe";

@NgModule({
  declarations: [
    SplicePipe,
  ],
  exports: [
    SplicePipe,
  ]
})
export class SpliceModule {}
