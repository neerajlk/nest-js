import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//controllers
import { ItemsController } from './items/items.controller';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';

//services
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [AppController,ItemsController,ShoppingCartController],
  providers: [AppService,ItemsService],
})
export class AppModule {}
