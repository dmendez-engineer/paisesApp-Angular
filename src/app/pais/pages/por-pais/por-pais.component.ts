import { Component, ElementRef, OnInit, ViewChild, ɵɵsetComponentScope } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {


  termino:string="";
  result!:string;
  error:boolean=false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  //@ViewChild('termino') termino!:ElementRef<HTMLInputElement>;

  public buscar(data:string){

    this.termino=data;

    const result=this.paisService.buscarPais(data); //Devuelve un Observable o Promise


    result.subscribe(data=>{
        console.log(data);
        this.paises=data;
        this.error=false;
    },(err)=>{
      this.result=this.termino;
      console.log("Error");
      console.log(err.status);
      this.paises=[];
      this.error=true
    })

    //console.log(this.termino);
  }
  public sugerencias(termino:string){
    this.error=false;
    this.mostrarSugerencias=true;
    this.termino=termino;
    this.paisService.buscarPais(termino).
    subscribe(data=>this.paisesSugeridos=data.splice(0,5),
    err=>this.paisesSugeridos=[]

      );
  }
  public buscarSugerido(termino:string){

    this.buscar(termino);
  }

}
