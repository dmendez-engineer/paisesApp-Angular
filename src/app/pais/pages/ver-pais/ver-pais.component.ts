import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private paisServe:PaisService) { }

  pais!:Country;

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisServe.getPaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe(data =>{
      console.log(data);
      this.pais=data;
    })
    /*
    this.activatedRoute.params.subscribe(({id}) =>{
      console.log(id);

      this.paisServe.getPaisPorCodigo(id).subscribe(data=>{
        this.pais=data;
      });


    });*/

  }

}
