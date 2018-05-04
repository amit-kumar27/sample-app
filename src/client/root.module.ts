import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { providers, imports, declarations } from "./module-node.config";

@NgModule({
  imports: imports(),
  declarations: declarations(),
  providers: providers(),
  exports: declarations(),
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class RootModule {
}
