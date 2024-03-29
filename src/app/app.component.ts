import { Component } from "@angular/core";

@Component({
	selector: "ab-root",
	template: `
  <section class="container">
    <ab-header class="row"></ab-header>
    <hr>
    <main>
      <router-outlet ></router-outlet>
    </main>
    <hr>
    <ab-footer class="row"></ab-footer>
  </section>

  `,
	styles: []
})
// el header es un componente que contiene la navegacion
export class AppComponent {
	title = "kab";
}
