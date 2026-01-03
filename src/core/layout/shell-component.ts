import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="bg-blue-600 text-white shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold hover:text-blue-200 transition">
              MyApp
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="flex space-x-4">
              <a
                routerLink="/todos"
                routerLinkActive="bg-blue-700 font-semibold"
                class="px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Todos
              </a>
              <a
                routerLink="/students"
                routerLinkActive="bg-blue-700 font-semibold"
                class="px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Students
              </a>
              <a
                routerLink="/products"
                routerLinkActive="bg-blue-700 font-semibold"
                class="px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Products
              </a>
              <a
                routerLink="/reactive-form"
                routerLinkActive="bg-blue-700 font-semibold"
                class="px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Form Demo
              </a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              (click)="toggleMenu()"
              class="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                @if(!isMenuOpen) {
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                } @else {
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if(isMenuOpen) {
        <div class="md:hidden border-t border-blue-700">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              routerLink="/todos"
              routerLinkActive="bg-blue-700 font-semibold"
              (click)="closeMenu()"
              class="block px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Todos
            </a>
            <a
              routerLink="/students"
              routerLinkActive="bg-blue-700 font-semibold"
              (click)="closeMenu()"
              class="block px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Students
            </a>
            <a
              routerLink="/products"
              routerLinkActive="bg-blue-700 font-semibold"
              (click)="closeMenu()"
              class="block px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Products
            </a>
            <a
              routerLink="/reactive-form"
              routerLinkActive="bg-blue-700 font-semibold"
              (click)="closeMenu()"
              class="block px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Form Demo
            </a>
          </div>
        </div>
      }
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
