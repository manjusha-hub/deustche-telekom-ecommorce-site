// store.module.ts

import { StoreComponent } from './store.component'; // Import StoreComponent
import { StoreService } from './store.service';     // Import StoreService

export class StoreModule {
  private storeService: StoreService;
  private storeComponent: StoreComponent;

  constructor() {
    this.storeService = new StoreService();               // Create an instance of StoreService
    this.storeComponent = new StoreComponent(this.storeService); // Pass StoreService to the component
  }

  // Initialize the StoreModule
  init(): void {
    this.storeComponent.init();  // Initialize the StoreComponent
  }
}
