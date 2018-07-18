import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.css']
})
export class FormModuleComponent implements OnInit {
  public collegeArr = [];
  public netArr = [];
  public user = {
    name: '',
    age: '',
    sex: 'male',
    habbit: '',
    college: '',
    net: ''
  };
  public userInfo = {
    name1: '',
    age1: ''
  };
  public staffInfo = {
    staffName: ''
  };
  public studentInfo = {
    firstName: '',
    lastName: '',
    province: '',
    city: '',
    area: ''
  };

  constructor() { }

  ngOnInit() {
    this.collegeArr = [
      {
        'id': '001',
        'name': '北京大学'
      },
      {
        'id': '002',
        'name': '上海大学'
      },
      {
        'id': '002',
        'name': '南京大学'
      }
    ];
    this.netArr = [
      {
        'id': 'test1',
        'name': '爸爸'
      },
      {
        'id': 'test2',
        'name': '妈妈'
      },
      {
        'id': 'test3',
        'name': '爷爷'
      },
      {
        'id': 'test4',
        'name': '奶奶'
      }
    ];
  }

  public submit () {
    console.log(this.user);
  }

  public console(datas) {
    console.log(datas);
    console.log(datas.value);
  }
  public print(datas1, datas2) {
    console.log(datas1.value);
    console.log(datas2.value);
  }
}
