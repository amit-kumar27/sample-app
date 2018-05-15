import { Routes, RouterModule } from "@angular/router";
import { App } from "./app.component";


const _routes: Routes = [
  {
    path: "",
    component: App
  }];
const _imports = [RouterModule.forChild(_routes)];

const _declarations = [App];
const _providers = [];

export function imports() {
  return _imports;
}

export function declarations() {
  return _declarations;
}

export function providers() {
  return _providers;
}
