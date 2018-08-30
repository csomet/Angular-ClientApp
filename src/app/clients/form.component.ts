import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public title:string = 'Create new client';
  public client:Client = new Client();

  constructor(private clientService: ClientService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load()
  }

  public load(): void {
    this.activatedRoute.params.subscribe(
      params => {
          let id = params['id']
          if(id){
            this.title = 'Modify client'
            this.clientService.getClient(id).subscribe(
              (client) => this.client = client
            )
          } else {
            this.title = 'Create client'
          }

      }
    )

  }

  public create(): void{
    this.clientService.create(this.client).subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal('Client saved!', `client ${client.name} created succesfully`, 'success' )
      }
    )

  }

  public update(): void{
    this.clientService.update(this.client).subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal('Client modified', `client ${client.name} was modified successfully`, 'success')
      }
    )
  }

}
