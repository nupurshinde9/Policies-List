import { Component, OnInit } from '@angular/core';
import { PolicesService } from './polices.service';
import { Policy } from './policy';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})

export class PoliciesComponent implements OnInit {

  dataSource = [];

  constructor(public policesService: PolicesService) { }

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {
    const data = await this.policesService.getPolicies();
    this.dataSource = data;
  }
}
