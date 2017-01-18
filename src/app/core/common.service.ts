import { Collectable } from './common.module';

export class CommonService {
  
  private collectable ='ddd';

  getDetails() {
      return this.collectable; 
  }
}