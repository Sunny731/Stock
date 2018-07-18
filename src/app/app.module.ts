import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormModuleComponent} from './test/form-module/form-module.component';
// import {FormComponent} from './form.component';

@NgModule({
  // 可声明对象表：当前模块需要使用的组件、指令和管道都需要再声明
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    FormModuleComponent,

  ],
  // 导出表：能在其它模块的组件模板中使用的可声明对象的子集    ==== 一般根模块不需要导出AppComponent，
  // 因为其它模块是不需要导入跟模块的
  exports: [],
  // 导入表：那些导出了本模块中的组件模板所需的类的其它模块
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // 本模块向全局服务中贡献的那些服务的创造器，这些服务能为本应用中的任何部分使用
  providers: [],
  // 启动应用的主视图，也就是根组件，注意:只有根组件才有bootstrap启用
  bootstrap: [AppComponent]
})
export class AppModule { }
