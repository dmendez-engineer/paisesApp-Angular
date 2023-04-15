import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {


  paises:Country[]=[];
  error:string="";
  result:string="";

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  public buscar(data:string){
      this.paisService.buscarPorCapital(data).subscribe(data=>{
        this.paises=data;
      },
      (err)=>{
        this.error="true";
        this.paises=[];

      });
  }
  public sugerencias(data:string){

  }
}
