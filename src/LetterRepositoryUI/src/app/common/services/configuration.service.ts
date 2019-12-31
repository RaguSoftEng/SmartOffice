import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  isTogleSideNav = false;
  isMobileDivice = false;
  constructor() { }
}
