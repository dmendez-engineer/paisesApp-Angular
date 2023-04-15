import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones:string[]=['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva:string='';

paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  public activarRegion(region:string){

   //this.paises=[];
    if(this.regionActiva===region){

      return;
    }
    this.paisService.buscarRegion(region).subscribe(data=>{
      console.log(data);
      this.paises=data;
    });
    this.regionActiva=region;




  }
  getClaseCSS(region:string) : string{
    return (region === this.regionActiva) ? 'btn-primary':'btn-outline-primary';
  }
}
