import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InsertDataPageRoutingModule } from "./insert-data-routing.module";

import { InsertDataPage } from "./insert-data.page";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [CommonModule, ComponentsModule, FormsModule, IonicModule, InsertDataPageRoutingModule],
  declarations: [InsertDataPage],
})
export class InsertDataPageModule {}
