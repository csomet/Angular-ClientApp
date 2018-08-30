import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit{

  clients: Client[];

  constructor(private clientService: ClientService){}

  ngOnInit(){
      this.clientService.getClients().subscribe(

        (clients) => this.clients = clients

      );
  }

  delete(client: Client): void {
    const swalWithBootstrapButtons = swal.mixin({
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false,
  })

  swalWithBootstrapButtons({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    this.clientService.delete(client.id).subscribe(
      response => {
        this.clients = this.clients.filter(cli => cli != client )
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    )

  } else if (
    // Read more about handling dismissals
    result.dismiss === swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
  }

}
